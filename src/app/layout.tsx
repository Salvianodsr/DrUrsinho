import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
    title: "Dr. Ursinho | Pediatria e Vacinas - Clínica Médica Integrada",
    description: "Clínica médica especializada em pediatria, vacinas e diversas especialidades. Agende sua consulta online, acesse resultados de exames e acompanhe sua saúde.",
    keywords: ["clínica médica", "pediatria", "vacinas", "agendamento online", "saúde", "exames", "prontuário médico"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className="flex flex-col min-h-screen font-sans">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
