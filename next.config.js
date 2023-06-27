/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //loader: 'custom',
    // hostname "prod-sc10-cd.azurewebsites.net"
    domains: ['prod-sc10-cd.azurewebsites.net'],
    // domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
