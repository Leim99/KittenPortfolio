<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-16 16:46:36
 * @LastEditors: Leim99 leiminwork@gmail.com
 * @LastEditTime: 2024-04-23 16:32:49
 * @FilePath: /kitten-blog/src/views/desc/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wel_home">
    <div class="header">
      <img src="../../assets/images/header.png" />
    </div>
    <div class="content_center">
      <img src="../../assets//images/center.png" />
      <el-button @click="navigateToChildPage">
        查看作品集
        <!-- <img class="right" src="../../assets/images/right.png" /> -->
        <i class="right iconfont icon-jiantou" ></i>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyUiIndex",

  data () {
    return {
      msg: '欢迎来到我的博客',
    }
  },

  mounted() {},

  methods: {
    navigateToChildPage() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style>
.wel_home{
  background-color:#101012;
  /* background-image: url("../../assets/images/bg6.jpg"); */
  /* background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover; */
  margin:0;
  height:100%;
  background-color: black;
  overflow: hidden;
}
.wel_home .header{
  margin-top:60px;
}
.wel_home .header img{
  width:90%;
}
.wel_home .content_center{
  position: relative;
  display: inline-block;
}
.wel_home .content_center img{
  width:80%;
}
.wel_home .content_center button{
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    height: 48px;
    width: 168px; 
    border: none;
    color: #ffffff;
    position: absolute;
    top: 70%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
}
.wel_home .content_center button span{
  padding-right:24px;
}

.wel_home .content_center button:hover .right{
  padding-left:26px;
  /* transition: all 0.36s ease; */
}
.wel_home .content_center .right{
  font-size: 12px;
    position: absolute;
    padding-left: 6px;
    top: 37%;
  transition: all 0.36s ease;
}
</style>