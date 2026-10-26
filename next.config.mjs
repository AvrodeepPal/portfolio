/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF where supported, falling back to WebP.
    formats: ['image/avif', 'image/webp'],
    // Optimized images are immutable for a year (source images are hashed static imports).
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
