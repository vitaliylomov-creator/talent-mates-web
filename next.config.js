/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean URLs — /about not /about.html
  trailingSlash: false,

  // Vercel handles image optimisation automatically
  images: {
    remotePatterns: [],
  },
}

module.exports = nextConfig
