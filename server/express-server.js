const express=require('express');
const app=express();
const fs=require('fs');
const path=require('path')

const bundle=require('../dist/vue-ssr-server-bundle.json');
const clientManifest=require('../dist/vue-ssr-client-manifest.json');
const renderer=require('vue-server-renderer').createBundleRenderer(bundle,{
    runInNewContext:false,
    template:fs.readFileSync(path.resolve(__dirname,'../src/index.ssr.html'),'utf-8'),
    clientManifest:clientManifest //通过MANIFEST清单为html模板最后添加客户端激活 使得不需要html-webpack-plugin注入客户端bundle
})


app.get('*',(req,res)=>{
        const context={url:req.url}
        renderer.renderToString(context,(err,html)=>{
            if(err) console.log(err)
            res.end(html)
        })
})
app.use(express.static(path.resolve(__dirname,'../dist')))
//提供对静态文件的访问 以使得服务端能够找到client.bundle.js 进行服务端激活
app.listen(8080,(err)=>{
    console.log('app running on 8080')
})