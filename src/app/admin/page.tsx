import { Users, Stethoscope, CalendarClock, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminDashboardPage() {
    return (
        <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto">

            <header>
                <h1 className="text-3xl font-bold text-text-primary">Visão Geral</h1>
                <p className="text-text-secondary">Estatísticas e indicadores da clínica.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Users size={24} />
                        </div>
                        <span className="flex items-center gap-1 text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                            <TrendingUp size={14} /> +12%
                        </span>
                    </div>
                    <p className="text-text-secondary font-medium text-sm uppercase tracking-wide">Total de Pacientes</p>
                    <h3 className="text-3xl font-bold text-text-primary mt-1">1,248</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral">
                            <CalendarClock size={24} />
                        </div>
                        <span className="flex items-center gap-1 text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                            <TrendingUp size={14} /> +5%
                        </span>
                    </div>
                    <p className="text-text-secondary font-medium text-sm uppercase tracking-wide">Consultas no Mês</p>
                    <h3 className="text-3xl font-bold text-text-primary mt-1">342</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                            <DollarSign size={24} />
                        </div>
                        <span className="flex items-center gap-1 text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                            <TrendingUp size={14} /> +18%
                        </span>
                    </div>
                    <p className="text-text-secondary font-medium text-sm uppercase tracking-wide">Receita (Mês)</p>
                    <h3 className="text-3xl font-bold text-text-primary mt-1">R$ 51.3k</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                            <Stethoscope size={24} />
                        </div>
                        <span className="flex items-center gap-1 text-sm font-bold text-text-secondary bg-gray-100 px-2 py-1 rounded-full">
                            Estável
                        </span>
                    </div>
                    <p className="text-text-secondary font-medium text-sm uppercase tracking-wide">Médicos Ativos</p>
                    <h3 className="text-3xl font-bold text-text-primary mt-1">12</h3>
                </div>

            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <h3 className="font-bold text-text-primary text-lg">Agendamentos Recentes</h3>
                    <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">Ver todos</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-text-secondary text-sm uppercase tracking-wide">
                                <th className="p-4 font-semibold">Paciente</th>
                                <th className="p-4 font-semibold">Médico</th>
                                <th className="p-4 font-semibold">Data / Hora</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {[
                                { paciente: 'Maria Oliveira', medico: 'Dr. Ricardo Silva', dataHora: '15/10/2023 - 14:30', status: 'Confirmado', valor: 'R$ 150,00', color: 'bg-success text-white' },
                                { paciente: 'João Souza', medico: 'Dra. Beatriz Santos', dataHora: '15/10/2023 - 15:00', status: 'Pendente', valor: 'R$ 280,00', color: 'bg-warning text-white' },
                                { paciente: 'Ana Beatriz', medico: 'Dra. Mariana Silva', dataHora: '15/10/2023 - 16:15', status: 'Cancelado', valor: 'R$ 150,00', color: 'bg-coral text-white' },
                            ].map((item, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-medium text-text-primary">{item.paciente}</td>
                                    <td className="p-4 text-text-secondary">{item.medico}</td>
                                    <td className="p-4 text-text-secondary">{item.dataHora}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold leading-none ${item.color}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold text-text-primary">{item.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
