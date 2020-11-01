const path=require('path');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:{
        app:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['vue-style-loader','css-loader']},
            {test:/\.(jpg|jpeg|png|gif)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template:'./src/index.html'
            }),
          

    ]
}