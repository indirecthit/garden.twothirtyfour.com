const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    // config.resolve.alias.data = path.join(__dirname, "data");
    return config
  }
};


module.exports = withPlugins([
  [optimizedImages, {
    responsive: {
      adapter: require('responsive-loader/sharp')
    }
  }],
], nextConfig);