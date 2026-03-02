import Image from 'next/image';

export default function QuemSomosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 px-4 md:px-8">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
                    <p className="text-xl opacity-90 leading-relaxed">
                        Acolhimento humanizado e excelência clínica para todas as etapas da sua jornada reprodutiva e familiar.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="container-custom mx-auto py-16 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-bold text-text-primary">Missão</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Oferecer um atendimento médico de excelência com empatia, foco na saúde integral da mulher, do bebê e da família. Acreditamos que cuidar da saúde vai muito além do corpo; envolve acolher emoções, esclarecer dúvidas e caminhar lado a lado em todas as fases da vida.
                        </p>
                        <h2 className="text-3xl font-bold text-text-primary mt-4">Visão</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Ser reconhecida nacionalmente como a clínica de referência número 1 em cuidado materno-infantil e saúde da mulher, unindo tecnologia avançada e atendimento humanizado.
                        </p>
                        <h2 className="text-3xl font-bold text-text-primary mt-4">Valores</h2>
                        <ul className="list-disc pl-5 text-text-secondary leading-relaxed flex flex-col gap-2">
                            <li>Atendimento Humanizado</li>
                            <li>Excelência Técnica</li>
                            <li>Sustentabilidade</li>
                            <li>Ética e Transparência</li>
                            <li>Empatia e Acolhimento</li>
                        </ul>
                    </div>
                    <div className="bg-gray-200 rounded-[32px] overflow-hidden aspect-[4/5] flex items-center justify-center relative shadow-lg">
                        <div className="absolute inset-0 bg-coral/10"></div>
                        <div className="text-center text-text-secondary z-10 p-8">
                            <span className="block text-4xl font-bold text-coral mb-2">+10k</span>
                            <span className="font-medium text-lg text-text-primary">Famílias atendidas com amor.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
