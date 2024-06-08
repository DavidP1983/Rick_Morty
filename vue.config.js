const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // __VUE_OPTIONS_API__: 'true',
        // __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ]
  }
})
