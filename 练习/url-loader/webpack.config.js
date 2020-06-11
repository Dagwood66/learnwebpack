module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/img/[name].[hash:7].[ext]"
                }
            }
        ]
    }
};
