<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-16 16:34:42
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-06-07 17:21:15
 * @FilePath: /kitten-blog/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created(){
    if(this.isMobile()) {
      this.$router.push({
          name: "mobilepage"
        });
        console.log('mobile....')
    }
  },
  methods:{
    isMobile(){
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height:100%;
  margin: 0;
}
html,body{
  height:100%;
  width: 100%;
  margin: 0;
  display: block;
  box-sizing: border-box;
  color:#ffffff!important;
  background-color:#181818;
}
.header #headTop {
  cursor: pointer;
}
</style>
