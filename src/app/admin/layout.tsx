"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, Users2, Stethoscope, Briefcase, CalendarClock, DollarSign, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const links = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Pacientes', href: '/admin/pacientes', icon: Users },
        { name: 'Médicos', href: '/admin/medicos', icon: Stethoscope },
        { name: 'Equipe do Site', href: '/admin/equipe', icon: Users2 },
        { name: 'Serviços', href: '/admin/servicos', icon: Briefcase },
        { name: 'Agendamentos', href: '/admin/agendamentos', icon: CalendarClock },
        { name: 'Financeiro', href: '/admin/financeiro', icon: DollarSign },
        { name: 'Configurações', href: '/admin/config', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-border flex flex-col h-full flex-shrink-0">
                <div className="p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                            <span className="font-bold">DU</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold leading-none block text-primary">Admin</span>
                            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Painel de Controle</span>
                        </div>
                    </Link>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {links.map(link => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors
                       ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'}`}
                            >
                                <Icon size={20} className={isActive ? 'text-primary' : 'text-text-secondary'} />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-border">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                        <LogOut size={20} /> Sair do Sistema
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>

        </div>
    );
}
