import { NextRequest, NextResponse } from 'next/server';

// Definir locales diretamente no middleware para evitar problemas de importação
const locales = ['en', 'pt'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    // Verifica se o pathname já começa com uma localidade
    const pathname = request.nextUrl.pathname;

    // Verifica se o pathname já tem uma localidade
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redireciona se não tiver localidade
    const locale = defaultLocale;

    // e.g. incoming request is /products
    // The new URL is /en/products
    return NextResponse.redirect(
        new URL(
            `/${locale}${pathname === '/' ? '' : pathname}`,
            request.url
        )
    );
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}; 