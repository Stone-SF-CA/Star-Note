const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "client/src/index.js"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // plugins: [

  // ],
};