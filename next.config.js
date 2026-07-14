/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean URLs — /about not /about.html
  trailingSlash: false,

  // Vercel handles image optimisation automatically
  images: {
    remotePatterns: [],
  },

  // /representation is served from a standalone static HTML in /public
  // (rich hero slider, custom form, own CSS shell) — Next.js rewrites
  // the clean URL to the .html file without exposing the extension.
  async rewrites() {
    return [
      { source: '/representation', destination: '/representation.html' },
    ]
  },
}

module.exports = nextConfig
