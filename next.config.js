/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Kalau kamu pakai <Image> dari next/image
  },
};

export default nextConfig;
