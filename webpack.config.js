let path = require('path');

let conf = {
  entry: './src/scripts.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'index.js',
    publicPath: '/js'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
};

module.exports = (env, options) => {
  conf.devtool = options.mode === "production" ? false : "cheap-module-eval-source-map";
  return conf;
};