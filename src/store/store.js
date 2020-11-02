import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//api模拟代码
const fetchMsg=function(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('bar receive the data')
    },2000);
  })
}

function createStore(){
  const store= new Vuex.Store({
    state:{
      msg:''
    },
    mutations:{
      setMsg(state,payload){
        state.msg=payload;
      }
    },
    actions:{
      //return 一个promise或直接return promise链 可确保在fetch之后被resolve
      fetchMsg({commit,state}){
        return new Promise((resolve,reject)=>{
          fetchMsg().then((data)=>{
            commit('setMsg',data)
            resolve()
          }).catch((err)=>{
            console.log(err);
          })
        })
     
      }
    }
  })
  //客户端代码 浏览器首先使用服务端产生的状态 保证服务端与客户端统一
  //为什么我们需要在客户端 replace状态 因为服务端不会保留任何store的状态(服务端的vuex只为了渲染出数据!!!)ssr渲染只为了初次
  //渲染的数据 客户端可以直接通过 服务端获取过的数据 直接放入 这里才是我们使用时真正的vuex-store
  if(typeof window!=='undefined'&&window.__INITIAL_STATE__){
      console.log('window.__INITIAL_STATE__',window.__INITIAL_STATE__);
      store.replaceState(window.__INITIAL_STATE__);
  }
  return store;
}
export default createStore;
