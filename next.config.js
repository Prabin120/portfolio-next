/** @type {import('next').NextConfig} */
const nextConfig = {
  host:"https://bright-bee-sari.cyclic.app/"
}

// module.exports = nextConfig
module.exports = {
    nextConfig,
    images: {
      domains: ['localhost', '127.0.0.1'], // Add all domains where your images are hosted
    },

  };