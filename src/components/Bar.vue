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
  
}
</script>

<style scoped>
div{
  color: red;
}
</style>
