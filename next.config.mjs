/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CFTOOL_URL: process.env.CFTOOL_URL,
    CFTOOL_APPID: process.env.CFTOOL_APPID,
    CFTOOL_SECRET: process.env.CFTOOL_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
