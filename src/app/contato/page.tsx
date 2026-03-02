import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContatoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <section className="container-custom mx-auto py-12 max-w-6xl">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Entre em Contato</h1>
                <p className="text-lg text-text-secondary mb-12 max-w-2xl">
                    Estamos aqui para ouvir e cuidar de você. Preencha o formulário abaixo ou utilize nossos canais diretos de atendimento.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                        <h3 className="text-2xl font-bold text-text-primary mb-6">Envie uma mensagem</h3>
                        <form className="flex flex-col gap-4" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">Nome Completo</label>
                                <input type="text" className="input-field" placeholder="Ex: Maria da Silva" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">E-mail</label>
                                    <input type="email" className="input-field" placeholder="maria@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">Telefone / WhatsApp</label>
                                    <input type="tel" className="input-field" placeholder="(99) 90000-0000" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">Assunto</label>
                                <select className="input-field bg-white">
                                    <option>Dúvidas sobre consultas</option>
                                    <option>Informações sobre exames</option>
                                    <option>Financeiro</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">Mensagem</label>
                                <textarea className="input-field min-h-[120px] resize-none" placeholder="Escreva sua mensagem aqui..."></textarea>
                            </div>
                            <button type="submit" className="btn-primary mt-4 w-full">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">Telefone</h4>
                                    <p className="text-text-secondary text-sm">(99) 90000-0000</p>
                                    <p className="text-text-secondary text-sm">(99) 3000-0000</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4">
                                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">E-mail</h4>
                                    <p className="text-text-secondary text-sm">contato@drursinho.com</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4 md:col-span-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">Endereço</h4>
                                    <p className="text-text-secondary text-sm">Av. das Palmeiras, 1234 - Sala 103</p>
                                    <p className="text-text-secondary text-sm">Bairro Jardim, Presidente Dutra - MA</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4 md:col-span-2">
                                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-1">Horário de Funcionamento</h4>
                                    <p className="text-text-secondary text-sm">Segunda a Sexta: 08:00 às 18:00</p>
                                    <p className="text-text-secondary text-sm">Sábado: 08:00 às 12:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder */}
                        <div className="bg-gray-200 rounded-xl overflow-hidden h-[250px] shadow-sm flex items-center justify-center border border-border">
                            <span className="text-text-secondary font-medium flex items-center gap-2">
                                <MapPin size={20} /> Mapa Interativo da Localização
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
