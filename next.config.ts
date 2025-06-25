import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ashisuku-navi',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
