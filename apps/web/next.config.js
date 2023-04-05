const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const { merge } = require('webpack-merge');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    return merge(config, {
      externals: [
        '@node-rs/bcrypt',
      ],
    });
  },
};

module.exports = withVanillaExtract(nextConfig);
