/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // only needed if you use <Image />
  },
};

export default nextConfig;
