// require our dependencies
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: '#cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/dev/js/index.js'
  ],

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name]-dev.js',
    publicPath: '/'
  },

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    noInfo: false
  },

  resolve: {
    modules: ['node_modules'],
    alias: {
      'vue': 'vue/dist/vue.js',
      'SRC': path.resolve(__dirname, 'src/'),
      'IMG': path.resolve(__dirname, 'src/assets/img'),
      'FONT': path.resolve(__dirname, 'src/assets/font'),
      'SASS': path.resolve(__dirname, 'src/dev/sass'),
      'STORE': path.resolve(__dirname, 'src/dev/js/Store'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
      // Resolve path for ScrollMagic's GSAP plugin
      'TweenLite': path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      'TimelineLite': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './src/dev'),
        loader: 'vue-loader',
        options: {
          sourceMap: false,
          loaders: {
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/dev/sass/variables"',
            scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/dev/sass/variables";'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './src/dev'),
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'file-loader?name=img/[name]-[hash:4].[ext]',
        include: path.join(__dirname, './src/assets/img')
      },
      {
        test: /\.(eot|svg|ttf|otf|woff2?)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
        include: path.join(__dirname, './src/assets/font')
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, './src/dev/sass/main')
      }
    ]
  }
}
