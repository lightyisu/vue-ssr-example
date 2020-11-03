<template>
  <div>
      Bar.vue
      <h2>异步ajax数据</h2>
      {{msg}}
  </div>
</template>

<script>
export default {
    asyncData({store}){
      return store.dispatch('fetchMsg');
    },
    computed:{
      msg(){
        return this.$store.state.msg;
      }
    },
    mounted(){
      if(!this.$store.state.msg){
        console.log('客户端正在获取数据');
        this.$store.dispatch('fetchMsg');
      }
    }
  
}
</script>

<style scoped>
div{
  color: red;
}
</style>
