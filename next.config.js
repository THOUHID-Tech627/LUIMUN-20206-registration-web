/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/about-us",
        destination: "/About-us",
      },
    ];
  },
};

module.exports = nextConfig;
