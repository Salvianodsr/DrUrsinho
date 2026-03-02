import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { generateToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email e senha são obrigatórios.' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email },
            include: { patient: true, doctor: true }
        });

        if (!user) {
            return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
        }

        const token = generateToken({ userId: user.id, role: user.role });
        setAuthCookie(token);

        const nome = user.role === 'PACIENTE' ? user.patient?.nome : (user.role === 'MEDICO' ? user.doctor?.nome : 'Administrador');

        return NextResponse.json({
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                email: user.email,
                nome,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Erro interno ao realizar login.' }, { status: 500 });
    }
}
