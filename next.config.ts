import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    path: '/',
    loader: 'imgix',
  },
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_PWD: 'fysite-ac-id',
  },
};

export default nextConfig;
