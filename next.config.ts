import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? 'https://isidoravidojevic.github.io/test/' : '',
  basePath: isProd ? "/test" : "",
  output: "export",
};

export default nextConfig;
