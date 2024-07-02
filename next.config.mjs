/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        CFTOOL_URL: process.env.CFTOOL_URL,
        CFTOOL_APPID: process.env.CFTOOL_APPID,
        CFTOOL_SECRET: process.env.CFTOOL_SECRET,
    }
};

export default nextConfig;
