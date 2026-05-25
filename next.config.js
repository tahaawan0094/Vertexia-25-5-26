/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
