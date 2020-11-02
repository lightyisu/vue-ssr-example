const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode: 'development',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['vue-style-loader', {
                    loader:"css-loader",
                    options:{
                        esModule:false
                    }
                }]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),


    ]
}