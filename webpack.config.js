const path = require('path');
  module.exports = {
    entry:[
      './src/index.js',
    ],
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /.css$/,
          use: [{
                  loader: 'style-loader',
                  
                },{
                  loader: 'css-loader',
                  options: {
                      sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                      sourceMap: true
                  }
                }
            
          ]
        }
      ],
    }
  
  };