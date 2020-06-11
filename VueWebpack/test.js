'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// const WebpackDevServer = require('../../../lib/Server');
const webpackConfig = require('./build/webpack.dev.conf.js');

const compiler = Webpack({});
// const compiler = Webpack(webpackConfig);
const devServerOptions = {};

const server = new WebpackDevServer(compiler, devServerOptions);

// server.listen(8080, '127.0.0.1', () => {
//     console.log('Starting server on http://localhost:8080');
// });