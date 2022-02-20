/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.picsum.photos",
      "bayut-production.s3.eu-central-1.amazonaws.com",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
