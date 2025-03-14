import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, timeZone } from './settings';

export default getRequestConfig(async ({ locale }) => {
    // Usar o locale padrão se não for fornecido
    const currentLocale = locale || defaultLocale;

    try {
        return {
            locale: currentLocale,
            timeZone,
            messages: (await import(`../messages/${currentLocale}.json`)).default
        };
    } catch (error) {
        console.error(`Could not load messages for locale: ${currentLocale}`, error);
        // Fallback para o locale padrão se o arquivo não existir
        return {
            locale: defaultLocale,
            timeZone,
            messages: (await import(`../messages/${defaultLocale}.json`)).default
        };
    }
}); 