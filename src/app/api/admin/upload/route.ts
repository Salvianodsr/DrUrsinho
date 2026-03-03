import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'Nenhum arquivo enviado.' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Gera nome único para evitar conflitos
        const ext = file.name.split('.').pop();
        const filename = `medico_${Date.now()}.${ext}`;
        const uploadPath = path.join(process.cwd(), 'public', 'images', filename);

        await writeFile(uploadPath, buffer);

        return NextResponse.json({ url: `/images/${filename}` });
    } catch (error) {
        console.error('Erro no upload:', error);
        return NextResponse.json({ error: 'Erro ao fazer upload da imagem.' }, { status: 500 });
    }
}
