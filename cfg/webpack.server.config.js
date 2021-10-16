const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {DefinePlugin} = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]', exportOnlyLocals: true,
              }
            }
          }
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]', exportOnlyLocals: true,
              }
            }
          }
        ],
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: IS_DEV ? 'eval' : false,
  plugins: [
    new DefinePlugin({
      'process.env.HOME': `'${process.env.HOME}'`,
      'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`,
      'process.env.SECRET': `'${process.env.SECRET}'`,
    })
  ],
}; 