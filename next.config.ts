// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    // …any other config options
};

module.exports = nextConfig;
