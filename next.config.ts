import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/share-market-course-ghaziabad',
        destination: '/smsa-share-market-course-ghaziabad',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
