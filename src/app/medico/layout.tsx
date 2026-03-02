"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Users, FilePlus, Settings, LogOut } from 'lucide-react';

export default function MedicoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const links = [
        { name: 'Minha Agenda', href: '/medico', icon: Calendar },
        { name: 'Meus Pacientes', href: '/medico/pacientes', icon: Users },
        { name: 'Prontuários Abertos', href: '/medico/prontuarios', icon: FilePlus },
        { name: 'Configurações', href: '/medico/config', icon: Settings },
    ];

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#F8F9FA] container-custom mx-auto py-8 gap-8">

            {/* Sidebar */}
            <aside className="w-full md:w-72 flex-shrink-0 flex flex-col gap-6">
                <nav className="flex flex-col gap-2 bg-white p-4 rounded-2xl shadow-sm border border-border">
                    <h3 className="font-bold text-text-secondary text-xs uppercase tracking-wider mb-4 px-4">Menu Médico</h3>
                    {links.map(link => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-colors
                       ${isActive ? 'bg-primary text-white shadow-button' : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'}`}
                            >
                                <Icon size={20} className={isActive ? 'text-white' : 'text-text-secondary'} />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto">
                    <div className="bg-white border border-border p-4 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">RO</div>
                            <div>
                                <p className="font-bold text-sm text-text-primary leading-tight">Dr. Ricardo Silva</p>
                                <p className="text-xs text-primary font-medium">Cardiologia</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors" title="Sair do Sistema">
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
