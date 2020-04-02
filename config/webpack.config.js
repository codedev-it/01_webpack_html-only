const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//helloworld
module.exports={
    entry:{
        main:"./src/main.js"
    },
    mode:"development",
    output:{
        filename:"[name]-bundle.js",
        publicPath: '/',
        path:path.resolve(__dirname,'../dist')
    },
    devServer:{
        contentBase:"dist"
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:true}
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
}