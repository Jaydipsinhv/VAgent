import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better React practices
  reactStrictMode: true,
  
  // Optimize images for Cloudflare Pages
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cloudflare has its own image optimization
    unoptimized: true,
  },
};

export default nextConfig;
