<template>
  <div>我是Login</div>
  <Welcome msg="hshuai"/>
  <el-button @click="goHome">返回首页</el-button>
</template>

<script>
import Welcome from './Welcome.vue';
  // import {useRouter} from 'vue-router';
  // const router = useRouter();
  // const goHome =  ()=> {
  //     router.push("./welcome");
  // }
  export default {
    components: { Welcome },
    name:'login',
    methods:{
      goHome(){
        this.$router.push("./welcome");
      }  
    }
  }
</script>

<style >

</style>
