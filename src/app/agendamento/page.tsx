"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import Image from 'next/image';

// Mocks based on the schema and reference
const mockDoctors = [
    { id: '1', name: 'Dr. Ricardo Silva', role: 'Cardiologia', image: null },
    { id: '2', name: 'Dra. Maria Oliveira', role: 'Ginecologia', image: null },
    { id: '3', name: 'Dr. Lucas Souza', role: 'Pediatria', image: null },
];

const mockServices = [
    { id: '1', name: 'Consulta de Rotina', duration: '45 min', price: 150.00 },
    { id: '2', name: 'Exame Especializado', duration: '60 min', price: 280.00 },
];

const mockTimeSlots = ['09:00', '09:45', '10:30', '11:15', '14:00', '14:45', '15:30', '16:15', '17:00'];

export default function AgendamentoPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [selectedDate, setSelectedDate] = useState<number | null>(8); // Mock for Oct 8
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
    };

    const handleConfirm = async () => {
        // Here we would call the API POST /api/appointments
        // For now we simulate success and redirect to patient area
        router.push('/paciente?agendamento=sucesso');
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] pb-20">

            {/* Top Breadcrumb / Steps */}
            <div className="bg-white border-b border-border py-4">
                <div className="container-custom mx-auto flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap">
                    {[
                        { num: 1, label: 'Profissional' },
                        { num: 2, label: 'Serviço' },
                        { num: 3, label: 'Data e Hora' },
                        { num: 4, label: 'Confirmação' }
                    ].map((s, idx) => (
                        <div key={s.num} className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${step === s.num ? 'bg-coral text-white' :
                                    step > s.num ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                {s.num}
                            </div>
                            <span className={`${step === s.num ? 'text-primary font-semibold' :
                                step > s.num ? 'text-text-primary' : 'text-gray-400'}`}>
                                {s.label}
                            </span>
                            {idx < 3 && <ChevronRight size={16} className="text-gray-300 mx-1" />}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-custom mx-auto mt-8 flex flex-col lg:flex-row gap-8">

                {/* Main Content Area */}
                <div className="flex-1 max-w-3xl">

                    {/* Step 1: Profissional */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">1. Escolha o Profissional</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {mockDoctors.map(doctor => (
                                    <div
                                        key={doctor.id}
                                        onClick={() => setSelectedDoctor(doctor)}
                                        className={`card hoverable flex flex-col items-center justify-center p-8 gap-4 border-2 transition-all cursor-pointer
                        ${selectedDoctor?.id === doctor.id ? 'border-coral bg-coral/5 shadow-md' : 'border-transparent'}`}
                                    >
                                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 overflow-hidden relative">
                                            {doctor.image ? (
                                                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                                            ) : (
                                                <User size={40} />
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-bold text-text-primary">{doctor.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!selectedDoctor}
                                    className={`btn-primary ${!selectedDoctor ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Avançar
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Serviço */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">2. Selecione o Serviço</h2>
                            <div className="flex flex-col gap-4">
                                {mockServices.map(service => (
                                    <div
                                        key={service.id}
                                        onClick={() => setSelectedService(service)}
                                        className={`bg-white rounded-xl p-6 border-2 flex items-center justify-between cursor-pointer transition-all
                         ${selectedService?.id === service.id ? 'border-coral bg-coral/5' : 'border-border'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedService?.id === service.id ? 'bg-coral text-white' : 'bg-primary/10 text-primary'}`}>
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-text-primary text-lg">{service.name}</h3>
                                                <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
                                                    <Clock size={14} /> Duração: {service.duration}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col items-end gap-2">
                                            <span className="font-bold text-coral text-xl">{formatPrice(service.price)}</span>
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                              ${selectedService?.id === service.id ? 'border-coral' : 'border-gray-300'}`}>
                                                {selectedService?.id === service.id && <div className="w-2.5 h-2.5 rounded-full bg-coral"></div>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-between">
                                <button onClick={() => setStep(1)} className="btn-outline">Voltar</button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!selectedService}
                                    className={`btn-primary ${!selectedService ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Avançar
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3 & 4: Data e Hora */}
                    {step >= 3 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">3. Data e Hora</h2>

                            <div className="bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col md:flex-row gap-8">

                                {/* Calendar Side */}
                                <div className="flex-1 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-bold text-text-primary">Outubro 2023</span>
                                        <div className="flex gap-2">
                                            <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft size={20} /></button>
                                            <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight size={20} /></button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-2">
                                        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => (
                                            <div key={d} className="text-xs font-semibold text-text-secondary">{d}</div>
                                        ))}
                                        {/* Empty slots */}
                                        <div className="text-gray-300 calendar-day">28</div>
                                        <div className="text-gray-300 calendar-day">29</div>
                                        <div className="text-gray-300 calendar-day">30</div>
                                        {/* Days */}
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(day => (
                                            <div
                                                key={day}
                                                onClick={() => setSelectedDate(day)}
                                                className={`calendar-day mx-auto ${selectedDate === day ? 'selected' : 'text-text-primary'} ${day === 8 ? 'font-bold' : ''}`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slots Side */}
                                <div className="flex-1 pl-0 md:pl-2">
                                    <h3 className="font-bold text-text-primary flex items-center gap-2 mb-6">
                                        <Clock size={18} className="text-coral" /> Horários Disponíveis
                                    </h3>

                                    <div className="grid grid-cols-3 gap-3">
                                        {mockTimeSlots.map(time => (
                                            <div
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`time-slot text-center ${selectedTime === time ? 'selected' : ''}`}
                                            >
                                                {time}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {step === 3 && (
                                <div className="mt-8 flex justify-between">
                                    <button onClick={() => setStep(2)} className="btn-outline">Voltar</button>
                                    <button
                                        onClick={() => setStep(4)}
                                        disabled={!selectedDate || !selectedTime}
                                        className={`btn-primary ${(!selectedDate || !selectedTime) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        Revisar Agendamento
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Sidebar Summary */}
                <div className="w-full lg:w-96 flex-shrink-0">
                    <div className="bg-coral/5 rounded-2xl border border-coral/20 p-6 sticky top-32">
                        <h3 className="font-bold text-coral text-lg flex items-center gap-2 mb-6 pb-4 border-b border-coral/20">
                            <CalendarIcon size={20} /> Resumo do Agendamento
                        </h3>

                        <div className="flex flex-col gap-6">
                            {/* Professional info */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <User size={20} />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Profissional</span>
                                    <p className="font-bold text-text-primary">{selectedDoctor ? selectedDoctor.name : 'Não selecionado'}</p>
                                </div>
                            </div>

                            {/* Service info */}
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Serviço</span>
                                    <p className="font-bold text-text-primary">{selectedService ? selectedService.name : 'Não selecionado'}</p>
                                </div>
                            </div>

                            {/* Date and Time info */}
                            {(selectedDate || selectedTime) && (
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <CalendarIcon size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Data e Hora</span>
                                        <p className="font-bold text-text-primary">
                                            {selectedDate ? `${selectedDate} de Outubro, 2023 - ` : 'Data não selecionada - '}
                                            {selectedTime ? selectedTime : 'Horário não selecionado'}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Total line */}
                            <div className="border-t border-dashed border-gray-300 pt-6 mt-2 flex items-center justify-between">
                                <span className="font-bold text-text-primary">Total</span>
                                <span className="text-2xl font-bold text-coral">
                                    {selectedService ? formatPrice(selectedService.price) : 'R$ 0,00'}
                                </span>
                            </div>

                            <button
                                onClick={handleConfirm}
                                disabled={step !== 4 || !selectedDoctor || !selectedService || !selectedDate || !selectedTime}
                                className={`btn-primary w-full py-4 text-lg mt-2 ${step !== 4 ? 'opacity-50 cursor-not-allowed bg-gray-400 border-gray-400' : ''}`}
                            >
                                Confirmar agendamento
                            </button>

                            <p className="text-xs text-text-secondary text-center mt-2 leading-relaxed">
                                Ao confirmar, você concorda com nossos termos de serviço e política de cancelamento.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 bg-[#FFF9F2] border border-[#FDE6D2] p-4 rounded-xl flex items-start gap-3 text-sm text-[#D97706]">
                        <Info size={20} className="flex-shrink-0 mt-0.5" />
                        <p>Cancelamento grátis até 24h antes do horário agendado.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
