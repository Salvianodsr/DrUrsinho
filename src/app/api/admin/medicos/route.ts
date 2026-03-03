import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET - Lista todos os médicos
export async function GET() {
    try {
        const medicos = await prisma.profileMedico.findMany({
            orderBy: { nome: 'asc' },
        });
        return NextResponse.json(medicos);
    } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        return NextResponse.json({ error: 'Erro ao buscar médicos.' }, { status: 500 });
    }
}

// POST - Cria um novo médico (sem usuário vinculado — admin direto)
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, crm, especialidade, bio, foto, tags, precoConsulta } = body;

        if (!nome || !crm || !especialidade) {
            return NextResponse.json({ error: 'Nome, CRM e especialidade são obrigatórios.' }, { status: 400 });
        }

        // Cria um usuário placeholder vinculado ao médico
        const { default: bcrypt } = await import('bcryptjs');
        const senhaHash = await bcrypt.hash(Math.random().toString(36), 10);

        const medico = await prisma.user.create({
            data: {
                email: `medico_${crm.replace(/[^a-zA-Z0-9]/g, '')}@drursinho.com`,
                password: senhaHash,
                role: 'MEDICO',
                doctor: {
                    create: {
                        nome,
                        crm,
                        especialidade,
                        bio: bio || null,
                        foto: foto || null,
                        tags: tags || null,
                        precoConsulta: precoConsulta || 150,
                    },
                },
            },
            include: { doctor: true },
        });

        return NextResponse.json(medico.doctor, { status: 201 });
    } catch (error: any) {
        console.error('Erro ao criar médico:', error);
        if (error.code === 'P2002') {
            return NextResponse.json({ error: 'Já existe um médico com esse CRM.' }, { status: 409 });
        }
        return NextResponse.json({ error: 'Erro ao criar médico.' }, { status: 500 });
    }
}
