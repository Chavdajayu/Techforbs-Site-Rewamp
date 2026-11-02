import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 95],
  },
  // Ensure Netlify compatibility
  output: undefined,
};

export default nextConfig;
