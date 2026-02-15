import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/story",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
