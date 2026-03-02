import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-6">
            <div className="container-custom mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo-branca.png" alt="Clínica Dr. Ursinho" width={240} height={80} className="h-16 w-auto object-contain" />
                    </Link>
                    <p className="opacity-90 mt-2 max-w-sm text-sm">
                        Acolhimento humanizado e excelência clínica para todas as etapas da sua jornada reprodutiva e familiar.
                    </p>
                </div>

                {/* Links Rápidos */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-2">Links Rápidos</h4>
                    <nav className="flex flex-col gap-3">
                        <Link href="/agendamento" className="opacity-90 hover:text-coral transition-colors">Agendamento Online</Link>
                        <Link href="/paciente" className="opacity-90 hover:text-coral transition-colors">Portal do Paciente</Link>
                        <Link href="/servicos" className="opacity-90 hover:text-coral transition-colors">Nossos Serviços</Link>
                        <Link href="/equipe" className="opacity-90 hover:text-coral transition-colors">Equipe Médica</Link>
                        <Link href="/contato" className="opacity-90 hover:text-coral transition-colors">Fale Conosco</Link>
                    </nav>
                </div>

                {/* Contato */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-2">Contato</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-3">
                            <MapPin className="text-coral flex-shrink-0 mt-1" size={20} />
                            <span className="opacity-90 text-sm">Av. das Palmeiras, 1234 - Sala 103<br />Bairro Jardim, Presidente Dutra - MA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-coral flex-shrink-0" size={20} />
                            <span className="opacity-90 text-sm">(99) 90000-0000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-coral flex-shrink-0" size={20} />
                            <span className="opacity-90 text-sm">contato@drursinho.com</span>
                        </li>
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-lg mb-2">Redes Sociais</h4>
                    <p className="opacity-90 text-sm mb-2">Acompanhe nossas dicas de saúde e novidades.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center hover:bg-white hover:text-coral transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center hover:bg-white hover:text-coral transition-colors">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 pt-6">
                <div className="container-custom mx-auto text-center">
                    <p className="opacity-70 text-xs text-center pb-2">
                        @2026 Dr. Ursinho. Todos os direitos reservados. Desenvolvido por: @salvianodsr.
                    </p>
                </div>
            </div>
        </footer>
    );
}
