const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/, //針對.scss檔案進行轉換
            use: [ //進行轉換前要經過哪些工具
                MiniCssExtractPlugin.loader, //將 css 檔案抽離出來
                'css-loader', //編譯 sass 檔案
                'sass-loader'
            ]
        }]
    },
    plugins: [new MiniCssExtractPlugin()]
}