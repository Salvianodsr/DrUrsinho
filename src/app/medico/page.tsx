import { Clock, User as UserIcon, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function MedicoDashboardPage() {
    return (
        <div className="flex flex-col gap-8 animate-fade-in">

            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-text-primary">Agenda do Dia</h1>
                    <p className="text-text-secondary">Hoje é Terça-feira, 15 de Outubro de 2023.</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-border flex items-center gap-8">
                    <div className="text-center">
                        <span className="block text-xl font-bold text-primary leading-none">8</span>
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Consultas</span>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="text-center">
                        <span className="block text-xl font-bold text-coral leading-none">2</span>
                        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Atrasos</span>
                    </div>
                </div>
            </header>

            <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
                {/* Day overview headers */}
                <div className="bg-gray-50 border-b border-border p-6 flex items-center justify-between">
                    <h3 className="font-bold text-text-primary">Pacientes Agendados</h3>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2 text-xs font-semibold text-text-secondary"><div className="w-3 h-3 rounded-full bg-success"></div> Confirmado</span>
                        <span className="flex items-center gap-2 text-xs font-semibold text-text-secondary"><div className="w-3 h-3 rounded-full bg-warning"></div> Aguardando</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    {[
                        { time: '09:00', patient: 'Ana Beatriz Souza', type: 'Primeira Consulta', status: 'Aguardando', age: '28 anos' },
                        { time: '09:45', patient: 'Carolina Mendes', type: 'Retorno', status: 'Confirmado', age: '32 anos' },
                        { time: '10:30', patient: 'Juliana Freitas', type: 'Exame de Rotina', status: 'Confirmado', age: '45 anos' },
                        { time: '11:15', patient: 'Roberto Alves', type: 'Avaliação Cirúrgica', status: 'Atrasado', age: '51 anos' },
                    ].map((appt, i) => (
                        <div key={i} className="group border-b border-border last:border-0 p-6 flex flex-col md:flex-row md:items-center gap-6 hover:bg-primary-50 transition-colors">

                            <div className="flex items-center gap-4 w-48 flex-shrink-0">
                                <span className="text-2xl font-bold text-primary">{appt.time}</span>
                                <div className={`w-3 h-3 rounded-full ${appt.status === 'Confirmado' ? 'bg-success' : appt.status === 'Aguardando' ? 'bg-warning' : 'bg-coral'}`}></div>
                            </div>

                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-text-secondary">
                                    <UserIcon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary text-lg">{appt.patient}</h4>
                                    <p className="text-sm text-text-secondary">{appt.age} • {appt.type}</p>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-4 md:mt-0 opacity-0 md:group-hover:opacity-100 transition-opacity">
                                <button className="btn-outline py-2 px-4 text-sm bg-white">Ver Prontuário</button>
                                <button className="btn-primary py-2 px-4 text-sm">Iniciar Consulta</button>
                            </div>

                            {/* Mobile buttons fallback */}
                            <div className="flex gap-3 md:hidden">
                                <button className="btn-outline py-2 px-4 flex-1 text-sm bg-white">Ver Prontuário</button>
                                <button className="btn-primary py-2 px-4 flex-1 text-sm">Iniciar</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
