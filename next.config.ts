/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,   // ⭐ บังคับให้แสดง base64 ได้
  },
};

module.exports = nextConfig;
