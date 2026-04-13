import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Changed from 'export' to 'standalone' for better Vercel compatibility
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // For static export if needed
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
};

export default nextConfig;