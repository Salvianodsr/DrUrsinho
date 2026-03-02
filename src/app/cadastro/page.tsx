"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CadastroPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    cpf: formData.cpf,
                    telefone: formData.telefone,
                    password: formData.password
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Erro ao realizar cadastro');
            }

            router.push('/paciente');

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)] bg-[#F8F9FA] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-sm border border-border">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                        Crie sua conta
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary">
                        Preencha os dados abaixo para ter acesso à área do paciente.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-100 mb-6">
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-text-primary mb-2">Nome Completo</label>
                            <input
                                type="text" name="nome" required
                                className="input-field" placeholder="Ex: Maria da Silva"
                                value={formData.nome} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">E-mail</label>
                            <input
                                type="email" name="email" required
                                className="input-field" placeholder="seu@email.com"
                                value={formData.email} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">Telefone / Celular</label>
                            <input
                                type="tel" name="telefone" required
                                className="input-field" placeholder="(99) 90000-0000"
                                value={formData.telefone} onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-text-primary mb-2">CPF</label>
                            <input
                                type="text" name="cpf" required
                                className="input-field" placeholder="000.000.000-00"
                                value={formData.cpf} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">Senha</label>
                            <input
                                type="password" name="password" required
                                className="input-field" placeholder="Mínimo 6 caracteres"
                                value={formData.password} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">Confirmar Senha</label>
                            <input
                                type="password" name="confirmPassword" required
                                className="input-field" placeholder="Confirme sua senha"
                                value={formData.confirmPassword} onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Cadastrando...' : 'Finalizar Cadastro'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-text-secondary">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="font-semibold text-primary hover:text-primary-dark">
                        Faça login aqui
                    </Link>
                </div>
            </div>
        </div>
    );
}
