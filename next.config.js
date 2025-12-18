/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Modern JavaScript - polyfill'leri azaltır
  compiler: {
    // Modern tarayıcılar için console.log'ları kaldır (production'da)
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
}

module.exports = nextConfig

