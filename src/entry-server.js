import {createApp} from './app'
export default context=>{
 return new Promise((resolve,reject)=>{

    const {app,store,App,router} =createApp()
   
    router.push(context.url);
    router.onReady(()=>{
        const matchedComponents=router.getMatchedComponents();
        console.log(context.url);
        console.log(matchedComponents);
        if(!matchedComponents.length){
            return reject({code:404})
        }
        Promise.all(matchedComponents.map(component=>{
            if(component.asyncData){
                return component.asyncData({store})
            }
        })).then(()=>{
            context.state=store.state;
            resolve(app);
        })
    },reject)

    /** 
     * Normal without Router
    // APP就是暴露出来的.vue $options
    let components=App.components;
    let asyncDataPromiseSeq=[];
    Object.values(components).forEach((component)=>{
            if(component.asyncData){
                asyncDataPromiseSeq.push(component.asyncData({store}))
            }
    })
    //等待所有组件预取函数取到数据
    Promise.all(asyncDataPromiseSeq).then(()=>{
       //context.state = store.state作用是，当使用createBundleRenderer时，如果设置了template选项，那么会把context.state的值作为window.__INITIAL_STATE__自动插入到模板html中
       //此时页面渲染必须等待服务器获取等待数据的2秒钟
        context.state=store.state;
        console.log('this is context');
        console.log(context)
        console.log(store.state)
        resolve(app);
    },reject)
    **/
 })   
   
}
