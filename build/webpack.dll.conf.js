/**
 * Created by caojingjing on 2019/3/18.
 */
const path = require('path')
const webpack = require('webpack');
const { library } = require('../config');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const output = {
    path: path.join(__dirname, '../static'),
    filename: 'dll.[name]_[hash:6].js',
    library: '[name]_library',
};

module.exports = {
    entry: library,
    output,
    plugins: [
        new CleanWebpackPlugin(), //清楚static目录, 默认清楚output.path目录
        new webpack.DllPlugin({
            path: path.join(__dirname, '../static', '[name]-manifest.json'),
            name: output.library,
            context: path.resolve(__dirname, '../')
        }),
        // 把带hash的dll插入到html中
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: './'
        })
    ]
}