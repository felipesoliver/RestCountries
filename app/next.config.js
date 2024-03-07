const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {}
const configsPluggins = [
  [
    withSvgr,
    {
      fileLoader: true,
      svgrOptions: {
        titleProp: true,
        icon: true,
      },
    },
  ]
]

module.exports = withPlugins(configsPluggins, nextConfig)
