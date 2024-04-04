/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  esli: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
