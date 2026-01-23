import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable edge runtime compatibility for Cloudflare Pages
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Ensure images work with Cloudflare (no image optimization API)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
