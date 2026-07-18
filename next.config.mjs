/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export as a static website
  output: "export",

  // Keep trailing slashes for GitHub Pages
  trailingSlash: true,

  // Optimize images for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;