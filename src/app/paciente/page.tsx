import { Calendar, MapPin, Clock, Download, TrendingUp, TrendingDown, ShieldCheck, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PacienteDashboardPage() {
    return (
        <div className="flex flex-col gap-6 animate-fade-in">

            <header className="mb-2">
                <h1 className="text-3xl font-bold text-text-primary">Olá, João Silva!</h1>
                <p className="text-text-secondary">Bem-vindo à sua área de saúde personalizada.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Próxima Consulta */}
                <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden flex flex-col sm:flex-row">
                    <div className="sm:w-[220px] bg-gray-200 aspect-square sm:aspect-auto relative flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40">
                        <span className="text-primary font-bold">Foto do Médico</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold border-b-2 border-primary/20 inline-block mb-1 text-xs uppercase tracking-wider text-text-secondary">Próxima Consulta</h3>
                                <h2 className="text-xl font-bold text-text-primary">Dr. Ricardo Oliveira</h2>
                                <p className="text-sm font-semibold text-coral uppercase tracking-wide">Cardiologia</p>
                            </div>
                            <span className="bg-coral/10 text-coral text-xs font-bold px-3 py-1 rounded-full border border-coral/20">Confirmado</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 my-6">
                            <div className="flex items-start gap-3">
                                <Calendar size={18} className="text-text-secondary mt-0.5" />
                                <div>
                                    <p className="text-xs text-text-secondary font-semibold uppercase">Data</p>
                                    <p className="font-bold text-sm text-text-primary">15 de Outubro</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={18} className="text-text-secondary mt-0.5" />
                                <div>
                                    <p className="text-xs text-text-secondary font-semibold uppercase">Horário</p>
                                    <p className="font-bold text-sm text-text-primary">14:30</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 col-span-2">
                                <MapPin size={18} className="text-text-secondary mt-0.5 max-w-[18px] min-w-[18px]" />
                                <div>
                                    <p className="text-xs text-text-secondary font-semibold uppercase">Local</p>
                                    <p className="font-bold text-sm text-text-primary">Av. das Palmeiras, 1234 - Sala 103</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <button className="btn-primary flex-1 py-2 text-sm">Reagendar</button>
                            <button className="bg-gray-100 text-text-primary font-semibold py-2 px-4 rounded-button hover:bg-gray-200 transition-colors flex-1 py-2 text-sm text-center">Cancelar</button>
                        </div>
                    </div>
                </section>

                {/* Sua Equipe Médica */}
                <section className="bg-white rounded-2xl shadow-sm border border-border p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-text-primary">Sua Equipe Médica</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                            <div className="flex-1">
                                <p className="font-bold text-sm text-text-primary">Dr. Ricardo Oliveira</p>
                                <p className="text-xs text-text-secondary">Cardiologia</p>
                            </div>
                            <button className="text-primary hover:text-primary-dark"><Calendar size={18} /></button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                            <div className="flex-1">
                                <p className="font-bold text-sm text-text-primary">Dra. Amanda Costa</p>
                                <p className="text-xs text-text-secondary">Clínica Geral</p>
                            </div>
                            <button className="text-primary hover:text-primary-dark"><Calendar size={18} /></button>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#1A1A1A] text-white p-5 rounded-xl relative overflow-hidden">
                        <ShieldCheck size={80} className="absolute -right-4 -bottom-4 text-white/10" />
                        <h4 className="font-bold text-sm mb-2 relative z-10">Check-up Anual</h4>
                        <p className="text-xs text-gray-400 mb-4 relative z-10">Não esqueça de realizar seus exames preventivos.</p>
                        <button className="text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-full relative z-10">Saiba Mais</button>
                    </div>
                </section>

                {/* Resultados Recentes */}
                <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                        <h3 className="font-bold text-text-primary flex items-center gap-2">
                            <FileText size={20} className="text-coral" /> Resultados Recentes
                        </h3>
                        <Link href="/paciente/exames" className="text-sm font-semibold text-coral hover:text-coral-dark">Ver todos</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        {[
                            { id: 1, name: 'Hemograma Completo', lab: 'Laboratório São Lucas', date: '05/10/2023' },
                            { id: 2, name: 'Eletrocardiograma', lab: 'Clínica CardioCare', date: '20/09/2023' },
                            { id: 3, name: 'Teste de Glicemia', lab: 'Laboratório São Lucas', date: '22/08/2023' },
                        ].map((exame) => (
                            <div key={exame.id} className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center flex-shrink-0">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-text-primary">{exame.name}</p>
                                        <p className="text-xs text-text-secondary">{exame.lab} • {exame.date}</p>
                                    </div>
                                </div>
                                <button className="btn-coral-outline py-1.5 px-3 text-xs flex items-center gap-2 bg-white">
                                    <Download size={14} /> Download
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dados Vitais */}
                <section className="bg-coral/5 rounded-2xl shadow-sm border border-coral/20 p-6">
                    <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-coral" /> Seus Dados Vitais
                    </h3>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-coral/10 flex justify-between items-center">
                            <div>
                                <p className="text-xs font-semibold text-text-secondary uppercase">Pressão Arterial</p>
                                <p className="font-bold text-lg text-text-primary">12/8 <span className="text-xs font-normal text-text-secondary">mmHg</span></p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><TrendingUp size={16} /></div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-coral/10 flex justify-between items-center">
                            <div>
                                <p className="text-xs font-semibold text-text-secondary uppercase">Peso</p>
                                <p className="font-bold text-lg text-text-primary">78.5 <span className="text-xs font-normal text-text-secondary">kg</span></p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><TrendingDown size={16} /></div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-coral/10 flex justify-between items-center">
                            <div>
                                <p className="text-xs font-semibold text-text-secondary uppercase">Glicemia</p>
                                <p className="font-bold text-lg text-text-primary">92 <span className="text-xs font-normal text-text-secondary">mg/dL</span></p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><ShieldCheck size={16} /></div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
