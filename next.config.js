module.exports = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = { topLevelAwait: true, layers: true }
    return config
  },
}
