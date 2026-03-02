"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Erro ao realizar login');
            }

            // Redireciona de acordo com o role (papel) do usuário
            if (data.user.role === 'PACIENTE') {
                router.push('/paciente');
            } else if (data.user.role === 'MEDICO') {
                router.push('/medico');
            } else if (data.user.role === 'ADMIN') {
                router.push('/admin');
            } else {
                router.push('/');
            }

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-border">
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary">
                        Bem-vindo(a) de volta!
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary">
                        Acesse sua área exclusiva para gerenciar consultas e exames.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">E-mail</label>
                            <input
                                type="email"
                                required
                                className="input-field"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-text-primary">Senha</label>
                                <a href="#" className="text-xs font-medium text-primary hover:text-primary-dark">Esqueceu a senha?</a>
                            </div>
                            <input
                                type="password"
                                required
                                className="input-field"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Entrando...' : 'Entrar na minha conta'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-text-secondary">
                    Ainda não tem conta?{' '}
                    <Link href="/cadastro" className="font-semibold text-primary hover:text-primary-dark">
                        Cadastre-se agora
                    </Link>
                </div>
            </div>
        </div>
    );
}
