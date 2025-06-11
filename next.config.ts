// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },

    // …any other config options
};

module.exports = nextConfig;
