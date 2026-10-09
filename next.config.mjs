/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/hospitalidad',
        destination: '/hoteles',
        permanent: true,
      },
      {
        source: '/nuestra-mixologia',
        destination: '/nuestra-gastronomia',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
