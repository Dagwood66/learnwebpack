console.log("进入Index.js");

let a = require("./config/1.js");
console.log(a);

// 动态打包-1
let fileName = "2";
let b = require('./config/' + fileName + '.js');
console.log(b);

// 动态打包-2
// let context = require.context("./config",false,/^.*\.js/);
// console.log(context.keys());
// console.log(context("./2.js"));