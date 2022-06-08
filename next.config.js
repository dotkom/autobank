module.exports = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = { topLevelAwait: true, layers: true }
    // config.resolve.alias['$components'] = path.resolve(__dirname, 'components')
    // config.resolve.alias['$prisma'] = path.resolve(__dirname, 'prisma')
    // config.resolve.alias['$lib'] = path.resolve(__dirname, 'lib')
    return config
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}
