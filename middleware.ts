import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/settings';

// Este middleware é criado pelo next-intl e gerencia a detecção de localidade
export default createMiddleware({
    // Uma lista de todas as localidades que são suportadas
    locales: locales,
    // Se a localidade solicitada não for suportada, usamos a padrão
    defaultLocale: defaultLocale,
    // Opcional: Redirecionar para a localidade padrão quando a raiz é acessada
    localePrefix: 'as-needed',
});

export const config = {
    // Matcher ignorando `/_next/` e `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}; 