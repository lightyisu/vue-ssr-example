const path=require('path');
const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const base=require('./webpack.base.config');
const VueSSRServerPlugin=require('vue-server-renderer/server-plugin');
const nodeExternals=require('webpack-node-externals')
module.exports=merge(base,{
    target:'node',
    entry:{
        server:path.resolve(__dirname,'../src/entry-server.js')
    },
    externals:[nodeExternals()],
    output:{
        libraryTarget:'commonjs2'
    },
    plugins:[
        new VueSSRServerPlugin(),
       
        
    ]
})