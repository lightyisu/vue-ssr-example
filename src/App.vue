<template>
  <div id="app">
      APP.VUE
      (2020)
     <router-view></router-view>
      {{time}}
      <button @click='changetime'>click me</button>
  </div>
</template>

<script>

export default {
    name:'app',
    data(){
        return{
            time:1332
        }
    },
   
    methods: {
      changetime() {
        this.time=1720
      }
    }
}
</script>

<style>
div{
  color: red;
}
</style>
