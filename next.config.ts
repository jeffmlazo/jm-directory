import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // dangerouslyAllowSVG: true, //This is only needed for svg images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
