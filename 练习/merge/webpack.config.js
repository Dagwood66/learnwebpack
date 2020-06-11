let merge = require("webpack-merge");
// 合并对象
console.log(merge(
    {
        a: 1,
        c: 1,
    },
    {
        b: 2,
        c: 2,
    },
    {
        c: 3,
    }
));
// 合并对象数组为对象
console.log(merge(
    [
        {
            a: 1,
            c: 1,
        },
        {
            b: 2,
            c: 2,
        },
        {
            c: 3,
        }
    ]
));
