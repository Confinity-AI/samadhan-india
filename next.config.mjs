/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    cpus: 1,
    workerThreads: true,
  },
  images: {
    unoptimized: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
