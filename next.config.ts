/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.codibook.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i4.codibook.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
