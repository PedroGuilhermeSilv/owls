"use client"

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

// Definir locales diretamente para evitar problemas de importação
const locales = ['en', 'pt'];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const switchLocale = (newLocale: string) => {
        // Obter o caminho atual
        const pathname = window.location.pathname;

        // Remover o locale atual do caminho
        let path = pathname;
        for (const loc of locales) {
            if (path.startsWith(`/${loc}/`)) {
                path = path.substring(loc.length + 1);
                break;
            } else if (path === `/${loc}`) {
                path = '/';
                break;
            }
        }

        // Navegar para o novo caminho com o novo locale
        const newPath = path === '/' ? `/${newLocale}` : `/${newLocale}${path}`;
        router.replace(newPath);
    };

    if (!isClient) return null;

    return (
        <div className="flex items-center space-x-2">
            <Button
                variant={locale === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => switchLocale('en')}
                className="w-10"
            >
                EN
            </Button>
            <Button
                variant={locale === 'pt' ? 'default' : 'outline'}
                size="sm"
                onClick={() => switchLocale('pt')}
                className="w-10"
            >
                PT
            </Button>
        </div>
    );
} 