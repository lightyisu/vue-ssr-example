const Koa=require('koa');
const Router=require('koa-router');
const Serve=require('koa-static');
const path=require('path');
const fs=require('fs');
const serve = require('koa-static');

const backendApp=new Koa();
const frontendApp=new Koa();

const backendRouter=new Router();
const frontendRouter=new Router();

const bundle=fs.readFileSync(path.resolve(__dirname,'../dist/server.bundle.js'),'utf-8');
const render=require('vue-server-renderer').createBundleRenderer(bundle,{
    template:fs.readFileSync(path.resolve(__dirname,'../dist/index.ssr.html'),'utf-8')
})
backendRouter.get('/index',(ctx,next)=>{
    render.renderToString((err,html)=>{
        if(err){
            console.error(err);
            ctx.body='internal error'
        }
        else{
            console.log(html);
            ctx.status=200;
            ctx.body=html;
        }
    })
})
backendApp.use(serve(path.resolve(__dirname,'../dist')));
backendApp.use(backendRouter.routes()).use(backendRouter.allowedMethods());
backendApp.listen(8080,()=>{
    console.log('ssr rendered on 8080')
})