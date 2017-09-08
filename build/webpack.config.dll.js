var path = require('path');
var webpack = require('webpack');
var root = path.resolve(__dirname, '../');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        verdor: [
            //"async-validator",
            //"autoprefixer",
            //"css-loader",
            //"element-ui",
            //"eslint",
            //"eventsource-polyfill",
            //"express",
            //"extract-text-webpack-plugin",
            //"file-loader",
            //"happypack",
            //"html-webpack-plugin",
            //"http-proxy-middleware",
            //"isomorphic-fetch",
            //"json-loader",
            //"lib-request",
            //"ora",
            //"shelljs",
            //"url-loader",
            "vue",
            //"vue-loader",
            //"vue-resource",
            //"vue-router",
            //"vue-style-loader",
            //"vue-template-compiler"
        ]
    },
    output: {
        path: root + '/dist/',
        publicPath: '/',
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: root,
            path: root + '/public/manifest.json',
            name: '[name]'
        }),
		new htmlWebpackPlugin({              // 利用该插件实现vendor被插入到html中
			filename: 'index.html',
			template: 'src/index.html',
			inject: 'body',
			hash: true,
			minify: {
				removeComments: true
			}
		})
    ]
};
