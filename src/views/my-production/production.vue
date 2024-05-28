<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-05-15 14:24:57
 * @LastEditors: Leim99 leiminwork@gmail.com
 * @LastEditTime: 2024-05-24 18:24:05
 * @FilePath: /my-blog/src/views/my-production/production.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
        <div class="production_layout" @scroll="handleScroll">
            <div class="header" :class='scrollHeight >= 30 ? "scroll_nav" : ""' content="首页">
                <div class="wrapper">
                    <div class="content">
                        <div id="headTop" class="u-head_top">
                            <a @click="go_dec(0)" id="logo">
                                <img src="../../assets/images/KITTENDESIGN.png" height="44">
                            </a>
                        </div>
                        <ul class="nav movedx">
                            <li class="navitem">
                                <a @click="go_dec(1)" target="_self">
                                    <span title="首页 ">首页{{ $route.params.id }} </span>
                                </a>
                            </li>
                            <li class="navitem">
                                <a @click="go_dec(2)" class="active">
                                    <span title="我的作品">我的作品</span>
                                </a>
                            </li>
                            <!-- <li class="navitem">
                                <a @click="go_dec(3)" target="_self">
                                    <span title="博客">博客</span>
                                </a>
                            </li> -->
                            <li class="navitem">
                                <a target="_self">
                                    <span title="PDF作品集">PDF作品集</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-if="item">
            <div class="header_title">
                <div style="padding-top:20%"></div>
                <p class="title_en">{{item.title}}</p>
                <p class="title_cn">{{item.label}}</p>
                <div style="padding-top:8%"></div>
            </div>
            <div class="detail_img">
                <img v-for="image in item.images" :src="image" :key="image" alt="Item image"/>
            </div>
        </div>
        <div v-else>loading...</div>
        </div>
</template>
<script>
        export default {
            name: 'production',
            data() {
                return {
                    scrollHeight: 0,
                    activeIndex: 0,
                    item: null
                };
            },
            created() {
                const itemId = this.$route.query.id;
                this.fetchItemDetails(itemId);
            },
            mounted() {
                const id = this.$route.query.id;
            // Fetch item details using the id
            console.log(`Fetching details for item with id: ${id}`);
            window.addEventListener('scroll', this.handleScroll);
            },
            methods: {
                go_dec(index) {
                    if (index == 0) {
                        this.$router.push({
                            path: "/desc",
                        });
                    }
                    if (index == 1) {
                        this.$router.push({
                            path: "/",
                        });
                    }
                    if (index == 2) {
                        this.$router.push({
                            path: "/production",
                        });
                    }
                    if (index == 3) {
                        this.$router.push({
                            path: "/blog",
                        });
                    }
        
        
                },
                handleScroll() {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    this.scrollHeight = scrollTop
                },
                fetchItemDetails(id) {
                const items = [
                    { id: 1,title:'杭州艺星小程序',label:'界面设计 小程序',images:[require('../../assets/images/yestar/yestar1.png'),require('../../assets/images/yestar/yestar1.png'),require('../../assets/images/yestar/yestar1.png')] },
                    { id: 2,title:'变美功课bot',label:'界面设计 小程序',images:['../../assets/images/yestar/yestar1.png','../../assets/images/yestar/yestar1.png'] },
                    { id: 3,title:'大娱互娱直播',label:'界面设计 APP',images:['../../assets/images/yestar/yestar1.png','../../assets/images/yestar/yestar1.png'] },
                    { id: 4,title:'房又家找房',label:'界面设计 APP',images:['../../assets/images/yestar/yestar1.png','../../assets/images/yestar/yestar1.png'] },
                    { id: 5,title:'商城后台管理',label:'界面设计 后台管理',images:['../../assets/images/yestar/yestar1.png','../../assets/images/yestar/yestar1.png'] },
                    { id: 6,title:'SaaS官网',label:'界面设计 网页设计',images:['../../assets/images/yestar/yestar1.png','../../assets/images/yestar/yestar1.png'] },
                    { id: 8,title:'公司官网',label:'界面设计 网页设计',images:['../../assets/images/yestar/yestar1.png','../../assets/images/yestar/yestar1.png'] },
                ];
                this.item = items.find(item => item.id === parseInt(id));
                }
            },
        };
        </script>
<style lang="scss" scoped>
.production_layout {
    background-color: #181818;
    height: 100%;
    position: relative;
    transition: transform 0.5s, background-color 0.5s;
    scroll-behavior: smooth;
}

.header {
    background-color: transparent;
    height: 80px;
    width: 100%;
    transition: all 0.5s ease;
    position: fixed;
    top: 0;
    z-index: 99;
    background: transparent;
}

.header .wrapper {
    width: 90%;
    height: 100%;
    margin: 0 auto;
}

.header .wrapper .content {
    margin: 0 auto;
    height: 100%;
    /* width: 90%;
    max-width: 90%; */
    border-bottom: none;
}

.header #headTop {
    padding: 0;
    height: 80px;
    width: auto;
    float: left;
    border-bottom-color: transparent;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(170, 170, 170, 0.2);
    display: block;
}

.header.scroll_nav {
    background-color: rgba(24,24,24,60);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .20);
    backdrop-filter: blur(18px);
}

#headTop #logo {
    display: block;
    top: 50%;
    transform: translateY(-50%);
}

body #logo {
    position: relative;
    float: left;
    height: 100%;
}

.header #headTop #logo img {
    height: 14px;
    max-width: initial;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    overflow: clip;
    border: none;
    vertical-align: top;
}

.header .content .nav {
    float: right;
    height: 100%;
}
body .content .nav .navitem {
    font-size: 14px;
    cursor: pointer;
    float: left;
    position: relative;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
}

a {
    text-decoration: none;
}

.header .content .nav .navitem a {
    line-height: calc(80px - 2px);
    color: #c2c2c2;
    transition: all .36s ease;
    padding: 0 20px;
}

.header .content .nav .navitem a:hover {
    color: #EB740C;
}

.header .content .nav .navitem a.active {
    border-top: 0;
    opacity: 1;
    padding: 0 20px;
    line-height: calc(80px - 2px);
    color: #EB740C;
    transition: all .36s ease;
}
.detail_img img{
    width: 90%;
}
.header_title{
    width: 90%;
    text-align: left;
    margin: 0 auto;
}
.header_title .title_en{
    font-size: 84px;
    font-weight:600;
    font-family: 'Arial Bold', sans-serif;
    margin: 0;
}
.header_title .title_cn{
    font-size: 20px;
    color:#999999;
    letter-spacing: 4px;
}

</style>
