/**
 * @file webpack.config.js
 * @author hefeng@zuoyebang.com
 *
 * webpack开发环境
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var options = {
  devServer: {
    host: '127.0.0.1',
    port: 3000
  }
};

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

var lessLoader = [
  'vue-style-loader',
  'css-loader',
  'postcss-loader',
  'less-loader'
];

var cssLoader = [
  'vue-style-loader',
  'css-loader',
  'postcss-loader'
];

module.exports = {
  entry: {
    vendor: [
      'vue/dist/vue.runtime.esm.js',
      'vue-router',
      'element-ui',
      'webpack-dev-server/client?http://' + options.devServer.host + ':' + options.devServer.port,
      'webpack/hot/only-dev-server'
    ],
    main: resolve('src/main.js')
  },
  output: {
    path: '/',
    filename: '[name].js',
    chunkFilename: 'chunk[id].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.vue$/,
        include: resolve('src'),
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              less: lessLoader,
              css: cssLoader
            },
            transformToRequire: {
              video: 'src',
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          }
        }
      },
      {
        test: /\.less$/,
        use: lessLoader
      },
      {
        test: /\.css$/,
        use: cssLoader
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      chunks: ['vender', 'main'],
      chunksSortMode: 'dependency',
      inject: true
    }),
    new webpack.ProgressPlugin(function (percentage, msg) {
      console.log('progress: ' + percentage.toFixed(2) + ' -- ' + msg);
    })
  ],
  resolve: {
    modules: [resolve('src'), resolve('node_modules')],
    extensions: ['.js', '.vue', '.less', '.css', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src')
    }
  },
  devtool: 'cheap-eval-source-map',
  devServer: options.devServer,
  mode: 'development'
};
