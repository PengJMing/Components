const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true,
    host: '127.0.0.1',
    port: '8090',
    hot: true,
    historyApiFallback: true,
    index: 'index.html',
    clientLogLevel: 'silent',
    disableHostCheck: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin({})]
};