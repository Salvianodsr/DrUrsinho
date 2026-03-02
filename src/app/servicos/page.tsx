import Link from 'next/link';
import { Search, Heart, Baby, Users, ShieldPlus } from 'lucide-react';

const servicos = [
    {
        id: 1,
        category: 'GESTANTE',
        title: 'Pré-natal Especializado',
        audience: 'Gestantes que buscam acompanhamento médico rigoroso e humanizado durante toda a gravidez.',
        howWorks: 'Consultas mensais (ou quinzenais), exames laboratoriais, ultrassonografias e suporte emocional contínuo.',
        benefits: 'Redução de riscos, monitoramento do crescimento fetal e preparação completa para o parto.',
        icon: <Baby className="text-white w-8 h-8" />
    },
    {
        id: 2,
        category: 'SAÚDE DA MULHER',
        title: 'Inserção de DIU',
        audience: 'Mulheres que desejam um método contraceptivo de longa duração, altamente eficaz e reversível.',
        howWorks: 'Procedimento rápido realizado em consultório após avaliação ginecológica e exames prévios.',
        benefits: 'Proteção de 3 a 10 anos, praticidade no dia a dia e sem necessidade de lembretes diários.',
        icon: <Heart className="text-white w-8 h-8" />
    },
    {
        id: 3,
        category: 'BEBÊ / INFANTIL',
        title: 'Puericultura Completa',
        audience: 'Recém-nascidos e crianças em fase de crescimento para acompanhamento preventivo.',
        howWorks: 'Avaliação do desenvolvimento neuropsicomotor, crescimento físico e calendário vacinal.',
        benefits: 'Detecção precoce de alterações e orientações sobre nutrição e segurança infantil.',
        icon: <Users className="text-white w-8 h-8" />
    }
];

export default function ServicosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <section className="container-custom mx-auto py-12">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Nossos serviços</h1>
                <p className="text-lg text-text-secondary max-w-2xl mb-12">
                    Cuidado especializado e humanizado. Encontre a assistência ideal para cada etapa da vida, com foco em prevenção e bem-estar.
                </p>

                {/* Filters */}
                <div className="flex flex-col gap-4 mb-12">
                    <div className="relative max-w-3xl border border-border bg-white rounded-lg flex items-center shadow-sm">
                        <Search className="absolute left-4 text-text-secondary" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por serviço ou especialidade..."
                            className="w-full h-14 pl-12 pr-4 bg-transparent outline-none focus:ring-0 text-text-primary placeholder-text-secondary rounded-lg"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Todas</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Saúde da Mulher</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Gestante</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Bebê</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Infantil</button>
                    </div>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-8 max-w-5xl">
                    {servicos.map((servico, i) => (
                        <div key={servico.id} className="bg-white rounded-2xl shadow-sm border border-border flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                            {/* Image Side */}
                            <div className={`md:w-[400px] h-[300px] md:h-auto bg-gray-200 flex items-center justify-center p-8 flex-shrink-0 ${i % 2 === 1 ? 'md:order-last bg-gray-900 border-l border-border' : 'border-r border-border'}`}>
                                <div className={`w-32 h-32 rounded-full flex items-center justify-center ${i === 1 ? 'bg-primary' : 'bg-coral'}`}>
                                    {servico.icon}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold text-coral bg-coral/10 px-3 py-1 rounded-full uppercase tracking-wide">
                                            {servico.category}
                                        </span>
                                        <button className="text-gray-400 hover:text-coral transition-colors">
                                            <Heart size={24} />
                                        </button>
                                    </div>
                                    <h2 className="text-2xl font-bold text-text-primary mb-6">{servico.title}</h2>

                                    <div className="flex flex-col gap-4 mb-8">
                                        <div>
                                            <span className="font-semibold text-text-primary text-sm block mb-1">Para quem é:</span>
                                            <p className="text-text-secondary text-sm">{servico.audience}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-text-primary text-sm block mb-1">Como funciona:</span>
                                            <p className="text-text-secondary text-sm">{servico.howWorks}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-primary text-sm block mb-1">Benefícios:</span>
                                            <p className="text-text-secondary text-sm">{servico.benefits}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                    <Link href={`/agendamento?servico=${servico.id}`} className="btn-primary flex-1 text-center py-3">
                                        Agendar Consulta
                                    </Link>
                                    <Link href={`/servicos/${servico.id}`} className="btn-outline flex-1 text-center py-3">
                                        Saiba Mais
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
