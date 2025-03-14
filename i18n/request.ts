import { getRequestConfig } from 'next-intl/server';

// Definir locales diretamente para evitar problemas de importação
const locales = ['en', 'pt'];
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
    // Usar o locale padrão se não for fornecido
    const currentLocale = locale || defaultLocale;

    try {
        return {
            locale: currentLocale,
            messages: (await import(`../messages/${currentLocale}.json`)).default
        };
    } catch (error) {
        console.error(`Could not load messages for locale: ${currentLocale}`, error);
        // Fallback para o locale padrão se o arquivo não existir
        return {
            locale: defaultLocale,
            messages: (await import(`../messages/${defaultLocale}.json`)).default
        };
    }
}); 