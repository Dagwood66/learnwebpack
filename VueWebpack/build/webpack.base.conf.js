'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    // 上下文设置为当前项目根路径
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: { // 模块解析(找到模块路径)
        // 1.绝对路径
        // 2.相对路径
        // 3.模块路径
        extensions: ['.js', '.vue', '.json'], // 自动解析确定的扩展(以js,vue,json类型的文件,导入时可以不带后缀名)
        alias: { // 路径别名
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: { // 处理不同类型的模块
        /*
        * 支持的模块
        *   ES2015 import
        *   CommonJs require
        *   AMD define/require
        *   css/scss/less @import
        *   样式 url(...)
        * */
        rules: [ // 处理规则
            /*
            * rule 条件
            *   1. test 匹配特定条件
            *   2. include 匹配特定条件
            *   3. exclude  排除特定条件
            *   4. resource
            *
            * rule 结果
            *
            * */
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]') // 大于限制输出路径
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]') // 大于限制输出路径
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]') // 大于限制输出路径
                }
            }
        ]
    },
    node: { // polyfill或mock nodejs 全局变量和模块
        // polyfill 提供polyfill
        // mock 提供mock实现
        // empty 提供空对象
        // false 什么都不提供

        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty', // UDP 数据包 socket 的实现
        fs: 'empty', // 文件系统
        net: 'empty', // 用于创建基于流的 TCP 或 IPC 的服务器
        tls: 'empty', // 对安全传输层（TLS）及安全套接层（SSL）协议的实现
        child_process: 'empty' // 提供了衍生子进程的能力
    }
};
