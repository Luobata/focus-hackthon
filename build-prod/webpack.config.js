var webpack = require('webpack');
var webpackMerge = require('webpack-merge')
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HappyPack = require('happypack');

var root = path.resolve(__dirname, '../').replace(/\\/g, '/') + '/';
var utils = require('../build/utils.js')
var assetsRoot = root +　'dist/';
var assetsSubDirectory = 'static/';
var productionSourceMap = true;
var productionGzip = false;

var devWebpackConfig = require('../build/webpack.config.js');

devWebpackConfig.plugins = [];
devWebpackConfig.module.loaders.pop();

var prodWebpackConfig = {
    devtool: productionSourceMap ? '#source-map' : false,
    entry : {
        app : "./src/main.js"
    },
    module: {
        loaders: utils.styleLoaders({ sourceMap: productionSourceMap, extract: true })
    },
    output: {
        path: assetsRoot,
        publicPath: require('./domain.js'),
        filename: assetsSubDirectory + 'js/[name].[chunkhash].js',
        chunkFilename: assetsSubDirectory + 'js/[id].[chunkhash].js'
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: productionSourceMap,
            extract: true
        })
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin(assetsSubDirectory + 'css/[name].[contenthash].css'),
        new htmlWebpackPlugin({
            filename: root + '/dist/index.html',
            template: 'src/index.html',
            inject: true,
            chunksSortMode: 'dependency',
            //chunks: ['app', 'manifest', 'vendor'],
            minify: {
                removeComments: true,
                collapseWhitespace: false,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return (
                    module.resource && /\.js$/.test(module.resource)
                    && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new HappyPack({
            loaders: [ 'babel?presets[]=es2015' ],
            cache: false
        })
    ]
};


if (productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackMerge(devWebpackConfig, prodWebpackConfig);
