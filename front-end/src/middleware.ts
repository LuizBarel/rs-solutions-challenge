import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('sessionToken')?.value;

    const isAuthPage =
        request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/register');

    // Se não houver token e for uma rota protegida, redireciona para login
    if (!token && !isAuthPage) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Se o usuário já estiver autenticado e tentar acessar login/register, redireciona para o dashboard
    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// Aplica o middleware apenas às rotas que precisa
export const config = {
    matcher: ['/', '/login', '/register'],
};
