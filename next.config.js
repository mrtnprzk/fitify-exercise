/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        urlFitify: "https://static.gofitify.com/",
    },
    images: {
        domains: ["static.gofitify.com"],
    },
};

module.exports = nextConfig;
