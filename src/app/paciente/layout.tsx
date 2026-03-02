"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, CalendarDays, FileText, Pill, User, LogOut } from 'lucide-react';

export default function PacienteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const links = [
        { name: 'Resumo', href: '/paciente', icon: LayoutDashboard },
        { name: 'Minhas Consultas', href: '/paciente/consultas', icon: CalendarDays },
        { name: 'Exames', href: '/paciente/exames', icon: FileText },
        { name: 'Prescrições', href: '/paciente/prescricoes', icon: Pill },
        { name: 'Meus Dados', href: '/paciente/perfil', icon: User },
    ];

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#F8F9FA] container-custom mx-auto py-8 gap-8">

            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
                <nav className="flex flex-col gap-2">
                    {links.map(link => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-colors
                       ${isActive ? 'bg-coral/10 text-coral' : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'}`}
                            >
                                <Icon size={20} className={isActive ? 'text-coral' : 'text-text-secondary'} />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-8 border-t border-border pt-6">
                    <Link href="/agendamento" className="btn-primary w-full text-center py-3">
                        Novo Agendamento
                    </Link>
                </div>

                <div className="mt-auto pt-8">
                    <div className="bg-white border border-border p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center text-white font-bold text-sm">JS</div>
                            <div>
                                <p className="font-bold text-sm text-text-primary">João Silva</p>
                                <p className="text-xs text-text-secondary">joao.silva@email.com</p>
                            </div>
                        </div>
                        <button className="text-text-secondary hover:text-coral transition-colors" title="Sair">
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

        </div>
    );
}
