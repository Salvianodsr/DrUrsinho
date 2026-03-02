"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, User, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Serviços', href: '/servicos' },
        { name: 'Equipe', href: '/equipe' },
        { name: 'Quem somos', href: '/quem-somos' },
        { name: 'Contato', href: '/contato' },
    ];

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname?.startsWith(path);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom mx-auto px-4 h-24 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center relative z-20">
                    <Image src="/images/logo.png" alt="Clínica Dr. Ursinho" width={240} height={80} className="h-14 w-auto object-contain" priority />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium text-base transition-colors ${isActive(link.href) ? 'text-primary font-semibold' : 'text-text-primary hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/paciente" className="flex items-center gap-2 font-medium text-text-primary hover:text-primary transition-colors border border-border px-4 py-2 rounded-button">
                        <span>Área do Paciente</span>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                            <User size={16} />
                        </div>
                    </Link>
                    <Link href="/agendamento" className="btn-primary flex items-center gap-2">
                        Agendar Consulta
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-text-primary z-20"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-white z-10 pt-28 px-4 flex flex-col gap-6 lg:hidden animate-fade-in">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-xl font-medium border-b border-gray-100 pb-4 ${isActive(link.href) ? 'text-primary' : 'text-text-primary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex flex-col gap-4 mt-auto mb-8">
                            <Link href="/paciente" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 font-medium text-text-primary border border-border px-4 py-3 rounded-button">
                                <span>Área do Paciente</span>
                                <User size={18} />
                            </Link>
                            <Link href="/agendamento" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">
                                Agendar Consulta
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
