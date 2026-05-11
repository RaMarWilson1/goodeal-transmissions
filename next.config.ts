/* Next.js configuration — safe for zero-config Vercel deployment */
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* Explicitly set the workspace root to silence Turbopack lockfile warning */
  turbopack: {
    root: path.resolve(__dirname),
  },

  /* Allow next/image to serve images from Google Maps if needed in the future */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
