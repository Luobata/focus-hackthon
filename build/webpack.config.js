var webpack = require('webpack');
var webpackMerge = require('webpack-merge')
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')
var HappyPack = require('happypack');

var root = path.resolve(__dirname, '../');
var utils = require('./utils.js')
var assetsSubDirectory = 'static/';
var cssSourceMap = true;

var webpackConfig = {
    entry : {
        app : [
            "./build/dev-client",
            "./src/main.js"
        ]
    },
    output: {
        path: root +　'/dist/',
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'LIB': path.resolve(__dirname, '../src/lib'),
            'MODEL': path.resolve(__dirname, '../src/script/model'),
            'PROXY': path.resolve(__dirname, '../src/script/proxy'),
            'STORE': path.resolve(__dirname, '../src/store'),
            'COMPONENTS': path.resolve(__dirname, '../src/components'),
            'ASSETS': path.resolve(__dirname, '../src/assets')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
                //loaders: ['happypack/loader?id=vue']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetsSubDirectory + 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetsSubDirectory + 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.js$/,
                loaders: [ 'happypack/loader' ],
                include: root,
                exclude: [
                    path.join(__dirname, '../node_modules/'),
                    path.join(__dirname, '../src/lib/ueditor/')
                ]
            },
            utils.styleLoaders({ sourceMap: cssSourceMap })
        ]
    },
    vue: {
        loaders: utils.cssLoaders(),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        }),
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: 'vendor',
        //    minChunks: function (module, count) {
        //        return (
        //            module.resource && /\.js$/.test(module.resource)
        //            && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        //        )
        //    }
        //}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new HappyPack({
            loaders: [ 'babel?presets[]=es2015' ],
            cache: false
        })
        //new webpack.DllReferencePlugin({
        //    context: root,
        //    manifest: require('../public/manifest.json')
        //})
    ]
};

module.exports = webpackConfig;
