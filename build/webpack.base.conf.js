/**
 * Created by caojingjing on 2019/3/16.
 */
'use strict'

const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.conf');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const manifest = require('../static/vendor-manifest.json');
const devMode = process.env.NODE_ENV !== 'production';
const isPlay = !!process.env.PLAY_ENV;
const config = require('./config');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: (isPlay ? './examples/play.js' : './examples/play.js'),
    },
    // 输出设置
    output: {
        path: resolve('lib'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            main: path.resolve(__dirname, '../src'),
            packages: path.resolve(__dirname, '../packages'),
            examples: path.resolve(__dirname, '../examples'),
            'isyscore-ui': path.resolve(__dirname, '../')
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     // include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')],
            //     exclude: /node_modules/
            // },
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: vueLoaderConfig
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest, // 关联dll拆分出去的依赖
            name: 'vendor_library'
        })
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}