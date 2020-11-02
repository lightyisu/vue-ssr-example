import Vue from 'vue';
import App from './App.vue'
import createStore from './store/store'
export function createApp(){
  const store=createStore();
    const app=new Vue({
        render:h=>h(App),
        store
    })
    return {app,store,App}
}
