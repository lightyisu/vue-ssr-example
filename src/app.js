import Vue from 'vue';
import App from './App.vue'
import createStore from './store/store'
import createRouter from './router/index'
export function createApp(){
  const store=createStore();
  const router=createRouter()
    const app=new Vue({
        render:h=>h(App),
        store,
        router
    })
    return {app,store,App,router}
}
