import Link from 'next/link';
import { Search } from 'lucide-react';

const doctors = [
    {
        id: 1,
        name: 'Dra. Mariana Silva',
        specialty: 'GINECOLOGIA E OBSTETRÍCIA',
        crm: 'CRM 12345-SP',
        desc: 'Especialista em parto humanizado e ginecologia regenerativa. Acredita no protagonismo feminino e no cuidado baseado em evidências e empatia.',
        tags: ['Pré-Natal de Alto Risco', 'Laparoscopia']
    },
    {
        id: 2,
        name: 'Dra. Beatriz Santos',
        specialty: 'MASTOLOGIA',
        crm: 'CRM 67890-SP',
        desc: 'Dedicação integral à saúde das mamas, aliando técnica cirúrgica de ponta com um olhar sensível às necessidades emocionais de cada paciente.',
        tags: ['Oncoplastia', 'Prevenção']
    },
    {
        id: 3,
        name: 'Dra. Camila Oliveira',
        specialty: 'ENDOCRINOLOGIA FEMININA',
        crm: 'CRM 54321-SP',
        desc: 'Focada no equilíbrio hormonal em todas as idades, desde a puberdade até a menopausa, com abordagem personalizada para cada metabolismo.',
        tags: ['Menopausa', 'Saúde Metabólica']
    },
    {
        id: 4,
        name: 'Dra. Juliana Costa',
        specialty: 'PSICOLOGIA PERINATAL',
        crm: 'CRP 09876-SP',
        desc: 'Acompanhamento emocional especializado para tentantes, gestantes e puérperas, fortalecendo a saúde mental materna e o vínculo familiar.',
        tags: ['Pós-parto', 'Luto Perinatal']
    },
    {
        id: 5,
        name: 'Dra. Roberta Mendes',
        specialty: 'NUTROLOGIA',
        crm: 'CRM 23456-SP',
        desc: 'Especialista em nutrologia feminina, auxiliando no controle de SOP, endometriose e performance através de uma alimentação equilibrada e funcional.',
        tags: ['SOP & Endometriose', 'Performance']
    },
    {
        id: 6,
        name: 'Dra. Fernanda Lima',
        specialty: 'DERMATOLOGIA FEMININA',
        crm: 'CRM 78901-SP',
        desc: 'Focada em tratamentos estéticos e clínicos que respeitam a individualidade e as alterações hormonais femininas, promovendo beleza e saúde.',
        tags: ['Melasma', 'Rejuvenescimento']
    }
];

export default function EquipePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <section className="container-custom mx-auto py-12">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Nossa Equipe Médica</h1>
                <p className="text-lg text-text-secondary max-w-2xl mb-12">
                    Conheça as especialistas dedicadas ao cuidado humanizado e integral da saúde feminina. Profissionais qualificadas prontas para acolher você em todas as fases da vida.
                </p>

                {/* Filters */}
                <div className="flex flex-col gap-4 mb-12 max-w-4xl">
                    <div className="relative border border-border bg-white rounded-lg flex items-center shadow-sm">
                        <Search className="absolute left-4 text-text-secondary" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar por nome ou especialidade..."
                            className="w-full h-14 pl-12 pr-4 bg-transparent outline-none focus:ring-0 text-text-primary placeholder-text-secondary rounded-lg"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Todas</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Ginecologia</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Obstetrícia</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Mastologia</button>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Endocrinologia</button>
                    </div>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map(doctor => (
                        <div key={doctor.id} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="h-64 bg-gray-200 flex items-center justify-center relative">
                                {/* Image placeholder */}
                                <div className="absolute inset-0 bg-primary/10"></div>
                                <User className="w-24 h-24 text-primary opacity-50 z-10" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-text-primary mb-1">{doctor.name}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold text-coral uppercase tracking-wide">{doctor.specialty}</span>
                                    <span className="text-xs text-text-secondary">| {doctor.crm}</span>
                                </div>
                                <p className="text-sm text-text-secondary mt-4 mb-6 leading-relaxed flex-1">
                                    {doctor.desc}
                                </p>
                                <div className="mb-6 h-auto">
                                    <span className="text-xs text-text-secondary font-semibold uppercase tracking-wider block mb-2">Especialidades</span>
                                    <div className="flex flex-wrap gap-2">
                                        {doctor.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-semibold text-coral bg-coral/10 px-2 py-1 rounded border border-coral/20 uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link href={`/agendamento?medico=${doctor.id}`} className="btn-primary w-full text-center mt-auto">
                                    Agendar uma consulta
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// Simple fallback icon for the placeholder
function User(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
