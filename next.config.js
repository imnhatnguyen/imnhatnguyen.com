// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/pw/*',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
