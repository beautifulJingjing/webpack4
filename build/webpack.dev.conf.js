/**
 * Created by caojingjing on 2019/3/16.
 */
'use strict'

const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var bundleConfig = require("../bundle-config.json");

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        //插进的引用, 压缩，分离美化
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),// 它允许在运行时更新所有类型的模块，而无需完全刷新,
        new HtmlWebpackPlugin({
            file: 'index.html',
            hash: true,
            template: 'index.html',
            // 加载dll文件
            vendorJsName: bundleConfig.vendor.js,
        }),
        // 加载dll文件
        new AddAssetHtmlPlugin([{
            filepath: path.join(__dirname, '../static', bundleConfig.vendor.js),
            publicPath: utils.assetsPath('/js'),
            outputPath: './static/js',
        }]),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),// 配置开发服务运行时的文件根目录
        host:'localhost',// 开发服务器监听的主机地址
        open: true,
        hot: true,
        compress:true,   // 开发服务器是否启动gzip等压缩
        port:8081       // 开发服务器监听的端口
    }
});
module.exports = devWebpackConfig;