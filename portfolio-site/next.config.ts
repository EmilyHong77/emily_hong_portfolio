import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/emily_hong_portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
