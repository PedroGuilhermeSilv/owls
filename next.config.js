/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                // Disable the Turbopack rule for problematic modules
            }
        }
    },
    images: {
        domains: ['images.unsplash.com', 'images.pexels.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    },
};

module.exports = withNextIntl({
    ...nextConfig,
    images: {
        domains: [
            'images.unsplash.com',
            'images.pexels.com',
            'hebbkx1anhila5yf.public.blob.vercel-storage.com'
        ],
    },
}); 