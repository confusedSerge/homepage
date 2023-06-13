/** @type {import('next').NextConfig} */

const CompressionPlugin = require('compression-webpack-plugin');

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    // output: 'export',

    images: {
        unoptimized: true,
    },

    webpack: (config) => {
        config.plugins.push(
            new CompressionPlugin(),
        );
        return config;
    },

}

module.exports = nextConfig

