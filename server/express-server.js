const express=require('express');
const app=express();
const fs=require('fs');
const path=require('path')

const bundle=fs.readFileSync(path.resolve(__dirname,'../dist/server.bundle.js'),'utf-8');
const renderer=require('vue-server-renderer').createBundleRenderer(bundle,{
    template:fs.readFileSync(path.resolve(__dirname,'../dist/index.ssr.html'),'utf-8')
})


app.get('/index',(req,res)=>{
        renderer.renderToString((err,html)=>{
            if(err) console.log(err)
            res.end(html)
        })
})
app.use(express.static(path.resolve(__dirname,'../dist')))
//提供对静态文件的访问 以使得服务端能够找到client.bundle.js 进行服务端激活
app.listen(8080,(err)=>{
    console.log('app running on 8080')
})