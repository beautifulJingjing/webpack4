/**
 * Created by caojingjing on 2019/3/16.
 */
'use strict'

const path = require('path')
const utils = require('./utils');
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin'); // 文本分离插件，分离css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var bundleConfig = require("../bundle-config.json");

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
    },
    plugins: [
        //插进的引用, 压缩，分离美化
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[chunkhash].css'),
            chunkFilename: utils.assetsPath('css/[name].[chunkhash].css')
        }),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // 加载dll文件
        new AddAssetHtmlPlugin([{
            filepath: path.join(__dirname, '../static', bundleConfig.vendor.js),
            outputPath: './static/js',
        }]),
        // 清除dist下的文件
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
            banner: "曹晶晶 - caojingjing - 2550815215@qq.com\n" +
            "hash:[hash]\n" +
            "chunkhash:[chunkhash]\n" +
            "name:[name]\n" +
            "file:[file]"
        }),
        // 分析哪些文件体积过大
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                sourceMap: config.build.productionSourceMap,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        splitChunks: {
            // chunks: "async",
            // minSize: 30000, // 模块的最小体积
            // minChunks: 1, // 模块的最小被引用次数
            // maxAsyncRequests: 5, // 按需加载的最大并行请求数
            // maxInitialRequests: 3, // 一个入口最大并行请求数
            // automaticNameDelimiter: '~', // 文件名的连接符
            // name: true,
            cacheGroups: {
                //缓存组, 在默认设置中，会将 node_mudules 文件夹中的模块打包进一个叫
                // vendors的bundle中，所有引用超过两次的模块分配到 default bundle 中。更可以通过 priority 来设置优先级
                vendors: {
                    chunks: "all",
                    minChunks:1,
                    test: path.resolve(__dirname, "../node_modules"),
                    name: "vendor", // 使用 vendor 入口作为公共部分
                    priority: -20,
                },
                default: {
                    minChunks: 2,
                    priority: -10,
                    name: 'vendor-async',
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `manifest.${entrypoint.name}`
        }

    }
});
module.exports = webpackConfig;