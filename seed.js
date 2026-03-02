const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    // Criar Admin
    const adminPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.upsert({
        where: { email: 'admin@drursinho.com' },
        update: {},
        create: {
            email: 'admin@drursinho.com',
            password: adminPassword,
            role: 'ADMIN',
        },
    });
    console.log('✅ Usuário Admin criado! (E-mail: admin@drursinho.com | Senha: admin123)');

    // Criar Médico
    const medicoPassword = await bcrypt.hash('medico123', 10);
    await prisma.user.upsert({
        where: { email: 'medico@drursinho.com' },
        update: {},
        create: {
            email: 'medico@drursinho.com',
            password: medicoPassword,
            role: 'MEDICO',
            doctor: {
                create: {
                    nome: 'Dr. Ricardo Silva',
                    crm: '123456-SP',
                    especialidade: 'Cardiologia',
                }
            }
        },
    });
    console.log('✅ Usuário Médico criado! (E-mail: medico@drursinho.com | Senha: medico123)');
}

main()
    .then(() => prisma.$disconnect())
    .catch(e => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });
