/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
    output: 'standalone',
    experimental: {
        turbo: {
            rules: {
                // Disable the Turbopack rule for problematic modules
            }
        }
    },
    images: {
        domains: ['images.unsplash.com', 'images.pexels.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
        unoptimized: process.env.NODE_ENV === 'development',
    },
};

module.exports = withNextIntl(nextConfig); 