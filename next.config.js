/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean URLs — /about not /about.html
  trailingSlash: false,

  // Vercel handles image optimisation automatically
  images: {
    remotePatterns: [],
  },

  // Standalone static HTML pages in /public served under clean URLs.
  // Each has its own hero slider, custom shell, and (for /about) its own
  // JSON-LD — kept as static HTML rather than converted to Next.js React
  // so styles stay fully scoped and behaviour matches the source file 1:1.
  async rewrites() {
    return [
      { source: '/about',          destination: '/about.html' },
      { source: '/representation', destination: '/representation.html' },
    ]
  },
}

module.exports = nextConfig
