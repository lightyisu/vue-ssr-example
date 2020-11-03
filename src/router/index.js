import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
function createRouter(){
    return new vueRouter({
        mode:'history',
        routes:[
        {path:'/bar',component:()=>import('../components/Bar.vue')},
        {path:'/foo',component:()=>import('../components/Foo.vue')}
        ]
    })
}
export default createRouter;