import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // ✅ Skip TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['bootstrapmade.com','randomuser.me'], // ✅ add your image domain here
  },
};

export default nextConfig;
