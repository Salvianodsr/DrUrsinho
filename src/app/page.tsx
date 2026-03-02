import Image from "next/image";
import Link from "next/link";
import { Activity, Heart, ShieldPlus, Stethoscope, Syringe, Clock, CalendarDays, Star } from "lucide-react";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                            Cuidando da sua família com <span className="text-coral">carinho e excelência</span>
                        </h1>
                        <p className="text-lg text-text-secondary md:text-xl">
                            Nossa clínica oferece atendimento médico humanizado, vacinas e diversas especialidades para todas as fases da vida.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href="/agendamento" className="btn-primary text-center py-3 px-8 text-lg font-semibold">
                                Agendar Consulta
                            </Link>
                            <Link href="/servicos" className="btn-outline text-center py-3 px-8 text-lg font-semibold bg-white">
                                Conhecer Serviços
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                            </div>
                            <div>
                                <div className="flex text-yellow-500">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <p className="text-sm font-semibold text-text-primary mt-1">+2.000 pacientes satisfeitos</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                        {/* Placeholder until real image is added */}
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-coral/30 flex items-center justify-center">
                            <span className="text-primary font-bold text-2xl">Imagem da Clínica/Médico</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços Section */}
            <section className="py-20 bg-white">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-text-primary mb-4">Nossos Principais Serviços</h2>
                        <p className="text-text-secondary">Oferecemos um leque completo de cuidados médicos integrados, sempre focando no seu bem-estar e saúde preventiva.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card hoverable flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-coral/20">
                            <div className="w-16 h-16 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                                <Stethoscope size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">Consultas Médicas</h3>
                            <p className="text-text-secondary text-sm">Diversas especialidades médicas com profissionais qualificados e atenciosos.</p>
                        </div>

                        <div className="card hoverable flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-primary/20">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <Syringe size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">Vacinação</h3>
                            <p className="text-text-secondary text-sm">Calendário de vacinação completo para bebês, crianças, adultos e idosos.</p>
                        </div>

                        <div className="card hoverable flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-coral/20">
                            <div className="w-16 h-16 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">Exames Laboratoriais</h3>
                            <p className="text-text-secondary text-sm">Coleta de exames com agilidade, conforto e precisão nos resultados.</p>
                        </div>

                        <div className="card hoverable flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-primary/20">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">Programas Preventivos</h3>
                            <p className="text-text-secondary text-sm">Check-ups e acompanhamento nutricional para uma vida mais saudável.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/servicos" className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2">
                            Ver todos os serviços &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Facilidade e conforto na palma da sua mão</h2>
                        <ul className="flex flex-col gap-4 text-lg mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><CalendarDays size={16} /></div>
                                Agendamento 100% online
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><Clock size={16} /></div>
                                Acesso a resultados de exames a qualquer momento
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><ShieldPlus size={16} /></div>
                                Histórico médico unificado e seguro
                            </li>
                        </ul>
                        <Link href="/cadastro" className="btn-secondary text-lg px-8 py-3 bg-white text-primary hover:bg-gray-100 border-white">
                            Criar Conta Gratuita
                        </Link>
                    </div>

                    <div className="relative h-[350px] bg-white/10 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-sm p-8 flex flex-col items-center justify-center">
                        <div className="bg-white/95 rounded-2xl p-6 w-full max-w-sm shadow-2xl text-text-primary mb-4 transform -rotate-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-coral text-white flex items-center justify-center font-bold">RF</div>
                                <div>
                                    <p className="font-bold text-sm">Roberto Freitas</p>
                                    <div className="flex text-yellow-400"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                                </div>
                            </div>
                            <p className="text-sm text-text-secondary italic">"Atendimento maravilhoso! A facilidade de agendar online e já ter tudo no meu histórico pelo celular é incrível. Recomendo para todos."</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
