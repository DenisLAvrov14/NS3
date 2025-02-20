import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default withNextIntl(nextConfig);
