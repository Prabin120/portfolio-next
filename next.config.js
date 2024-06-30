/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', '127.0.0.1'], // Add all domains where your images are hosted
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    });

    // Make sure to return the modified config
    return config;
  },
};

module.exports = nextConfig;
