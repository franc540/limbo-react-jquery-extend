const path = require('path');
const nodeExternals = require('webpack-node-externals');

  module.exports = {
    entry:[
      './src/index.js',
    ],
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'JqueryExtend',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  
  };