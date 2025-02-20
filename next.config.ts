import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Добавляем localhost в доверенные домены
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8055',  // Указываем порт Directus
        pathname: '/assets/**', // Разрешаем загрузку всех ресурсов из /assets/
      },
    ],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
