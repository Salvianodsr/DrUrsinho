import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rotas que exigem autenticação
const protectedRoutes = ['/paciente', '/medico', '/admin'];

// Rotas exclusivas para usuários não autenticados (opcional, mas bom ter)
const authRoutes = ['/login', '/cadastro'];

export function middleware(request: NextRequest) {
    const token = request.cookies.get('drursinho_token')?.value;
    const path = request.nextUrl.pathname;

    // Verifica se a rota atual é protegida
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

    // Verifica se a rota é de login/cadastro
    const isAuthRoute = authRoutes.some(route => path.startsWith(route));

    if (isProtectedRoute && !token) {
        // Se tentou acessar rota protegida sem token, redireciona para login
        const loginUrl = new URL('/login', request.url);
        // return NextResponse.redirect(loginUrl);
        // Para UX melhor, podemos salvar a URL tentada:
        return NextResponse.redirect(new URL(`/login`, request.url));
    }

    if (isAuthRoute && token) {
        // Se tentou acessar login já logado, redireciona para alguma dashboard genérica
        // Como não conseguimos decodificar o admin/medico/paciente facilmente na Edge (JWT Node),
        // Pelo menos jogamos pro /paciente ou home.
        return NextResponse.redirect(new URL('/paciente', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
