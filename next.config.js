/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: false,
  images: { unoptimized: true },
};

module.exports = withContentlayer(nextConfig)
