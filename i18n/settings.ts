// Configurações compartilhadas entre cliente e servidor
export const locales = ['en', 'pt'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number]; 

// Configurações para o next-intl
export const timeZone = 'America/Sao_Paulo';

// Configurações para páginas que não precisam de tradução
export const pathnames = {
  '/': '/',
  '/dashboard': '/dashboard',
} as const; 