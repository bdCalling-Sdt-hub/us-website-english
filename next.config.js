/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.bravotelecom.com", "daisyui.com", "www.seiu1000.org"],
  },
  server: {
    target: "server",
    host: "167.71.98.150",
    port: 3000,
  },
};

module.exports = nextConfig;
