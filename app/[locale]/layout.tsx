import { ThemeProvider } from "@/components/theme-provider";
import { locales } from "@/i18n/settings";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Owls - Innovative Software Solutions",
    description: "Transforming ideas into powerful software solutions for businesses of all sizes.",
};

// Generate static params for supported locales
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

// Define the layout props with proper typing compatible with Next.js
export type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: string }>; // Use Promise for dynamic params
};

// Use default export with async to handle the Promise
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    // Await the params since it's a Promise
    const { locale } = await params;

    // Validate locale
    if (!(locales as readonly string[]).includes(locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={{}}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}