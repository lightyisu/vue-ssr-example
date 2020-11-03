const path=require('path');
const {merge}=require('webpack-merge');
const base=require('./webpack.base.config');
const VueSSRServerPlugin=require('vue-server-renderer/server-plugin');
const nodeExternals=require('webpack-node-externals')
module.exports=merge(base,{
    target:'node',
    entry:{
        server:path.resolve(__dirname,'../src/entry-server.js')
    },
    externals:[nodeExternals()],//必需的 不然报错 客户端代码不需要包含依赖
    output:{
        libraryTarget:'commonjs2'
    },
    plugins:[
        new VueSSRServerPlugin(),
       
        
    ]
})