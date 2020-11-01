const path=require('path');
const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const baseConfig=require('./webpack.base.config');
module.exports=merge(baseConfig,{
    entry:{
        client:path.resolve(__dirname,'../src/entry-client.js')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html'),
            filename:'index.html'
        })
    ]
})