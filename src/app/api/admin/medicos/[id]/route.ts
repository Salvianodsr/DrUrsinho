import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET - Busca um médico por ID
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const medico = await prisma.profileMedico.findUnique({
            where: { id: params.id },
        });
        if (!medico) {
            return NextResponse.json({ error: 'Médico não encontrado.' }, { status: 404 });
        }
        return NextResponse.json(medico);
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar médico.' }, { status: 500 });
    }
}

// PUT - Atualiza um médico
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const { nome, crm, especialidade, bio, foto, tags, precoConsulta } = body;

        const medico = await prisma.profileMedico.update({
            where: { id: params.id },
            data: {
                nome,
                crm,
                especialidade,
                bio: bio || null,
                foto: foto || null,
                tags: tags || null,
                precoConsulta: precoConsulta || 150,
            },
        });

        return NextResponse.json(medico);
    } catch (error: any) {
        console.error('Erro ao atualizar médico:', error);
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Médico não encontrado.' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Erro ao atualizar médico.' }, { status: 500 });
    }
}

// DELETE - Remove um médico (e seu usuário vinculado)
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const medico = await prisma.profileMedico.findUnique({
            where: { id: params.id },
            select: { userId: true },
        });

        if (!medico) {
            return NextResponse.json({ error: 'Médico não encontrado.' }, { status: 404 });
        }

        // Deleta o usuário vinculado (cascade apaga o ProfileMedico)
        await prisma.user.delete({ where: { id: medico.userId } });

        return NextResponse.json({ message: 'Médico removido com sucesso.' });
    } catch (error) {
        console.error('Erro ao remover médico:', error);
        return NextResponse.json({ error: 'Erro ao remover médico.' }, { status: 500 });
    }
}
