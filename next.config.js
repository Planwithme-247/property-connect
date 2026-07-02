// Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // keep conservative; enable appDir if not already
    appDir: true
  }
}

module.exports = nextConfig
