/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/lordksix/portfolio-v2",
        permanent: false,
      },
      {
        source: "/home",
        destination: "/",
        permanent: false,
      },
    ];
  },
}

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

module.exports = withNextIntl(nextConfig)
