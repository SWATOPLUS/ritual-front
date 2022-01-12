/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          options: {
            name: "static/files/[name].[ext]"
          }
        },
      ],
    })
    return config
  }
}
