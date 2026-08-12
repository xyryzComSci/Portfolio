/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root; a stray package-lock.json in a parent directory
  // otherwise makes Turbopack guess wrong.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
