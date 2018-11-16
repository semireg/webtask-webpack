/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

function buildConfig(env) {
  var config = {
    entry: './webtask.js',
    target: 'node',
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'build.js',
      libraryTarget: 'commonjs2'
    },
    externals: nodeModules,
    plugins: [
      new webpack.IgnorePlugin(/\.(css|less)$/)
    ],
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }

  if (env === 'prod') {
    config = Object.assign({}, config, {
      optimization: {
        minimizer: [new UglifyJsPlugin({
          output: {
              comments: false
          }
      })]
      }
    })
  }

  return config;
}

module.exports = buildConfig