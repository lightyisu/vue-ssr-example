<template>
  <div id="app">
      APP.VUE
      (2020)
      <Foo></Foo>
      <Bar></Bar>
      {{time}}
      <button @click='changetime'>click me</button>
  </div>
</template>

<script>
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue'
export default {
    name:'app',
    data(){
        return{
            time:1332
        }
    },
    components:{
        Foo,Bar
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
