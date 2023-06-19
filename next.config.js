const webpack = require('webpack');


/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          })
        );
        return config;
      },
}

module.exports = nextConfig
