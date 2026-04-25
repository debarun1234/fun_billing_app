/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fun_billing_app',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
