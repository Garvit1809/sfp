import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Source images are small; serve them untouched so they render exactly like the reference page
  images: { unoptimized: true },
};

export default nextConfig;
