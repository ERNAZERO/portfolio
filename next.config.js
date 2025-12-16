/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs/' : '',
}

module.exports = nextConfig