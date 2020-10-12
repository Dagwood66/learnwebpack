let child_process = require('child_process');

function JhmSvnUpPlugin() {

}

JhmSvnUpPlugin.prototype.apply = function (compiler) {
    let isAfterEmit = false;

    compiler.plugin("afterEmit", function () {
        isAfterEmit = true;
    })

    compiler.plugin("done", function () {
        if (isAfterEmit) {
            if (compiler.options.mode == "production") {
                try {
                    let result = child_process.execSync(`TortoiseProc.exe /command:commit /path:"dist"`, { encoding: "utf-8" });
                    console.log("上传成功");
                } catch (e) {
                    console.error("窗口关闭或其他问题");
                    console.error(e.toString());
                }
            } else {
                console.error("非production");
            }
        }
    })
}

module.exports = JhmSvnUpPlugin;