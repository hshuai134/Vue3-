<template>
  <div>我是Welcome:{{msg}}</div>
  <!-- <el-button>去登录</el-button> -->
  <router-link to="/login">去登陆</router-link>
</template>

<script>
// import { defineProps } from '@vue/runtime-core'
  export default {
    name:'Welcome',
    props:['msg']
  }
  // defineProps({
  //   msg:String
  // })
</script>

<style >

</style>
