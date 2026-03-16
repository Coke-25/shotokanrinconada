import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
