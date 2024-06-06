<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-16 16:46:36
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-06-06 13:37:29
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
                <p>https://www.leimin.fun</p>
                <div class="card_button">
                    <i class="iconfont icon-fuzhi"></i>
                    <span>复制链接</span>
                </div>
                <div class="background"></div>
            </div>
        </div>
        </div>
      </template>
      
      <script>
      export default {
        name: "mobilepage",
        data () {
          return {
            msg1: '为了更好的浏览体验',
            msg2: '请复制链接到电脑端查看',
          }
        },
      
        mounted() {},
      
        methods: {
        },
      };
      </script>
      <style>
          .mobile_div{
              height: 100vh;
              display: flex;
              padding: 20px;
          }
          .mobile_content{
              margin: 0 auto;
              text-align: center;
              width: 100vh;
              align-content: center;
          }
        .mobile_div .title{
            font-size: 28px;
            font-weight: 600;
            line-height: 36px;
        }
        .mobile_div .card{
            position: relative;
            width: 100%;
            margin: auto;
            background-color: #fff;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            color:#181818;
            margin-top: 30px;
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
            font-weight: 100;
            font-size: 32px;
        }
        .mobile_div .card p{
            opacity: 0.6;
            font-size: 26px;
        }
        .mobile_div .card_button{
            height: 100px;
            width: 100%;
            border-top: 1px solid #E2E2E2;
            text-align: center;
            align-content: center;
        }
        .mobile_div .card_button i{
            font-size: 32px;
            font-weight: 500;
        }
        .mobile_div .card_button span{
            font-size: 24px;
            font-weight: 500;
            padding-left: 10px;;
        }
      </style>