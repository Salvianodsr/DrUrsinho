import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { generateToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const { email, password, nome, cpf, telefone } = await request.json();

        if (!email || !password || !nome || !cpf) {
            return NextResponse.json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' }, { status: 400 });
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: 'Email já cadastrado.' }, { status: 400 });
        }

        const existingPatient = await prisma.profilePaciente.findUnique({ where: { cpf } });
        if (existingPatient) {
            return NextResponse.json({ error: 'CPF já cadastrado.' }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user and patient profile in transaction
        const user = await prisma.$transaction(async (tx: any) => {
            const newUser = await tx.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    role: 'PACIENTE',
                    patient: {
                        create: {
                            nome,
                            cpf,
                            telefone,
                        }
                    }
                },
                include: { patient: true }
            });
            return newUser;
        });

        // Generate token and set cookie
        const token = generateToken({ userId: user.id, role: user.role });
        setAuthCookie(token);

        return NextResponse.json({
            message: 'Cadastro realizado com sucesso',
            user: {
                id: user.id,
                email: user.email,
                nome: user.patient?.nome,
                role: user.role
            }
        }, { status: 201 });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: 'Erro interno ao realizar cadastro.' }, { status: 500 });
    }
}
