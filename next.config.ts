import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages serves the site below /shotokanrinconada/.
  basePath: "/shotokanrinconada",
  assetPrefix: "/shotokanrinconada/",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
