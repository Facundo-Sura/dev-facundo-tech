import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**', // Cubre todas las fotos de Unsplash
      },
    ],
  },
};

export default nextConfig;
