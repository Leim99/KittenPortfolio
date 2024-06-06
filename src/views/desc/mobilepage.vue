<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-16 16:46:36
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-06-06 18:22:05
 * @FilePath: /kitten-blog/src/views/desc/mobilepage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
        <div class="mobile_div">
            <div class="mobile_content">
            <div class="title title1">{{msg1}}</div>
            <div class="title title2">{{msg2}}</div>
            <div class="card">
                <img class="avatar" src="../../../public/assets/images/title-icon.png"/>
                <h1 class="name">KITTEN DESIGN</h1>
                <div ref="copyText" class="link_text" type="text"> https://www.leimin.fun</div>
                <div class="card_button" @click="copyToClipboard">
                    <i class="iconfont icon-fuzhi"></i>
                    <span>复制链接</span>
                </div>
                <div class="background"></div>
            </div>
        </div>
        <div class="message-container">
        <transition name="fade" class="message-container">
                <div v-if="showMessage" class="message">已复制！</div>
              </transition>
            </div>
        </div>
      </template>
      
      <script>
      export default {
        name: "mobilepage",
        data () {
          return {
            msg1: '为了更好的浏览体验',
            msg2: '请复制链接到电脑端浏览~',
            textToCopy: '',
            showMessage: false,
          }
        },
      
        mounted() {},
      
        methods: {
            async copyToClipboard() {
      try {
        // 获取 div 元素中的文本内容
        const textToCopy = this.$refs.copyText.innerText;
        
        // 使用浏览器的剪贴板 API 复制文本
        await navigator.clipboard.writeText(textToCopy);
        
        // 提示用户复制成功
        this.showNotification()
      } catch (err) {
        // 处理错误，比如用户拒绝了剪贴板权限
        console.error('无法复制文本到剪贴板:', err);
        alert('无法复制文本到剪贴板，请检查浏览器权限。');
      }
    },
    showNotification() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 1500);
    },
        },
      };
      </script>
      <style>
          .mobile_div{
              height: 100vh;
              display: flex;
              padding: 0 40px 0 40px;
          }
          .mobile_content{
              margin: 0 auto;
              text-align: center;
              width: 100vh;
              align-content: center;
          }
        .mobile_div .title{
            font-size: 16px;
            /* font-weight: 600; */
            line-height: 24px;
        }
        .mobile_div .card{
            position: relative;
            width: 100%;
            margin: auto;
            background-color: #fff;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.9);
            color:#181818;
            margin-top: 40px;
        }
        .mobile_div .card .avatar {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            position: relative;
            margin-top: 2em;
            z-index: 2;
            box-shadow: 0 0 10px rgba(221, 146, 142, 0.40);
        }
        .mobile_div .card .name{
            font-weight: 500;
            font-size: 18px;
            letter-spacing: 2px;
        }
        .mobile_div .card .link_text{
            opacity: 0.6;
            font-size: 16px;
            margin-bottom: 16px;
            letter-spacing: 2px;
        }
        .mobile_div .card_button{
            height: 60px;
            width: 100%;
            border-top: 1px solid #E2E2E2;
            text-align: center;
            align-content: center;
        }
        .mobile_div .card_button i{
            font-size: 20px;
            font-weight: 500;
        }
        .mobile_div .card_button span{
            font-size: 16px;
            /* font-weight: 500; */
            padding-left: 10px;;
        }
        .mobile_div .background{
            width: 100%;
            height: 100px;
            position: absolute;
            top: -1px;
            background: #181818;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
        }
        .fade-enter, .fade-leave-to {
        opacity: 0;
        }
        .message-container {
        position: fixed; 
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1000; 
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none; 
        }

        .message-container .message {
        background-color: rgba(0, 0, 0, 0.7); 
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px; 
        font-size: 14px; 
        white-space: nowrap; 
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
        max-width: 300px;
        pointer-events: auto; 
        margin-top: 80px;
        }
      </style>