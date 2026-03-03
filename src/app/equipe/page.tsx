import Image from 'next/image';
import Link from 'next/link';

type Medico = {
    id: string;
    nome: string;
    crm: string;
    especialidade: string;
    bio: string | null;
    foto: string | null;
    tags: string | null;
};

async function getMedicos(): Promise<Medico[]> {
    try {
        // Em produção, busca diretamente do banco via Prisma (Server Component)
        const { prisma } = await import('@/lib/db');
        const medicos = await prisma.profileMedico.findMany({
            orderBy: { nome: 'asc' },
            select: { id: true, nome: true, crm: true, especialidade: true, bio: true, foto: true, tags: true },
        });
        return medicos;
    } catch {
        return [];
    }
}

export default async function EquipePage() {
    const medicos = await getMedicos();

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <section className="container-custom mx-auto py-12">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Nossa Equipe Médica</h1>
                <p className="text-lg text-text-secondary max-w-2xl mb-12">
                    Conheça os profissionais dedicados ao cuidado humanizado e integral da sua saúde. Especialistas prontos para acolher você em todas as fases da vida.
                </p>

                {medicos.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-text-secondary text-lg">Em breve, conheça nossa equipe!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {medicos.map(medico => (
                            <div key={medico.id} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="h-64 bg-gray-100 relative flex items-center justify-center">
                                    {medico.foto ? (
                                        <Image
                                            src={medico.foto}
                                            alt={medico.nome}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-primary/30">
                                            <UserIcon />
                                            <span className="text-xs text-text-secondary">Foto em breve</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-text-primary mb-1">{medico.nome}</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold text-coral uppercase tracking-wide">{medico.especialidade}</span>
                                        <span className="text-xs text-text-secondary">| {medico.crm}</span>
                                    </div>
                                    {medico.bio && (
                                        <p className="text-sm text-text-secondary mt-4 mb-6 leading-relaxed flex-1">
                                            {medico.bio}
                                        </p>
                                    )}
                                    {medico.tags && (
                                        <div className="mb-6">
                                            <span className="text-xs text-text-secondary font-semibold uppercase tracking-wider block mb-2">Especialidades</span>
                                            <div className="flex flex-wrap gap-2">
                                                {medico.tags.split(',').map((tag, i) => (
                                                    <span key={i} className="text-[10px] font-semibold text-coral bg-coral/10 px-2 py-1 rounded border border-coral/20 uppercase tracking-wide">
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <Link href={`/agendamento?medico=${medico.id}`} className="btn-primary w-full text-center mt-auto">
                                        Agendar uma consulta
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}
