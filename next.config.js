/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
