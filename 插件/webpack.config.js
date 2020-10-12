const path = require('path');
const test = require("./01创建插件/001");

module.exports = {
    mode: "production",
    plugins: [
        new test()
    ]
};