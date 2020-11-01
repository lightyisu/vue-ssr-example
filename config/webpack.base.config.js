const path=require('path');
const VueLoaderPlugin=require('vue-loader/lib/plugin');


module.exports={
    mode:'development',
  
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['vue-style-loader','css-loader','postcss-loader']},
            {test:/\.(jpg|jpeg|png|gif)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
            new VueLoaderPlugin(),
           

    ]
}