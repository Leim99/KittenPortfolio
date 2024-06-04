<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-05-15 14:24:57
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-06-04 19:41:44
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
                                    <span title="首页 ">首页 </span>
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
                                    <a>
                                      <span title="PDF作品集">下载附件<i class="iconfont icon-xia"></i></span>
                                    </a>
                                    <ul class="subnav">
                                        <li><a :href="downloadPortfolioUrl" download="雷敏的UI作品集和简历.zip">UI作品集和简历下载</a></li>
                                    </ul>
                                  </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-if="item">
            <div class="header_title">
                <div style="padding-top:12%"></div>
                <p class="title_en">{{item.title}}</p>
                <p class="title_cn">{{item.label}}</p>
                <div style="padding-top:8%"></div>
            </div>
            <div class="detail_img">
                <div v-for="image in item.images">
                <img :src="image" :key="image" alt="Item image"  v-if="isImage(image)"/>
                <video width="90%" height="100%" controls  v-else-if="isVideo(image)">
                    <source :src="image" type="video/mp4">
                  </video>
                  <div v-else>isnull</div>
                </div>
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
                    item: null,
                    downloadPortfolioUrl: '/雷敏的UI作品集和简历.zip',
                };
            },
            created() {
                const itemId = this.$route.query.id;
                this.fetchItemDetails(itemId);
                console.log('this.fetchItemDetails(itemId)',this.fetchItemDetails(itemId))
            },
            computed: {
                // isImage() {
                // return this.fetchItemDetails.images.endsWith('.jpg') || this.fileUrl.endsWith('.jpeg') || this.fileUrl.endsWith('.png');
                // },
                // isVideo() {
                // return this.fileUrl.endsWith('.mp4');
                // },
            },
            mounted() {
                const id = this.$route.query.id;
            // Fetch item details using the id
            console.log(`Fetching details for item with id: ${id}`);
            window.addEventListener('scroll', this.handleScroll);
            console.log('video....',this.isVideo);
            },
            methods: {
                go_dec(index) {
                    if (index == 0) {
                        this.$router.push({
                            path: "/",
                        });
                    }
                    if (index == 1) {
                        this.$router.push({
                            path: "/",
                        });
                    }
                    if (index == 2) {
                        this.$router.push({
                            name: "production",
                            query:{
                                id:0
                            } 
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
                    { id: 1,title:'杭州艺星小程序',label:'界面设计 小程序',images:[require('../../assets/images/yestar/yestar1.png'),require('../../assets/images/yestar/yestar2.png'),require('../../assets/images/yestar/yestar3.png'),require('../../assets/images/yestar/yestar4.png'),require('../../assets/images/yestar/yestar5.png'),require('../../assets/images/yestar/yestar6.png'),require('../../assets/images/yestar/yestar7.png'),require('../../assets/images/yestar/yestar8.png'),require('../../assets/images/yestar/yestar9.png'),require('../../assets/images/yestar/yestar10.png'),require('../../assets/images/yestar/yestar11.png'),require('../../assets/images/yestar/yestar12.png')]},
                    { id: 2,title:'变美功课bot',label:'界面设计 小程序',images:[require('../../assets/images/anlifenx/anlifenx1.png'),require('../../assets/images/anlifenx/anlifenx2.png'),require('../../assets/images/anlifenx/anlifenx3.png'),require('../../assets/images/anlifenx/anlifenx4.png'),require('../../assets/images/anlifenx/anlifenx5.png'),require('../../assets/images/anlifenx/anlifenx6.png'),require('../../assets/images/anlifenx/anlifenx7.png'),require('../../assets/images/anlifenx/anlifenx8.png'),require('../../assets/images/anlifenx/anlifenx9.png'),require('../../assets/images/anlifenx/anlifenx10.png'),require('../../assets/images/anlifenx/anlifenx11.png'),require('../../assets/images/anlifenx/anlifenx12.png')]},
                    { id: 3,title:'大娱互娱直播',label:'界面设计 APP',images:[require('../../assets/images/zhibo/live1.png'),require('../../assets/images/zhibo/live2.png'),require('../../assets/images/zhibo/live3.png'),require('../../assets/images/zhibo/live4.png'),require('../../assets/images/zhibo/live5.png'),require('../../assets/images/zhibo/live6.png'),require('../../assets/images/zhibo/live7.png'),require('../../assets/images/zhibo/live8.png')] },
                    { id: 4,title:'房又家找房',label:'界面设计 APP',images:[require('../../assets/images/fangchan/fangchan1.png'),require('../../assets/images/fangchan/fangchan2.png'),require('../../assets/images/fangchan/fangchan3.png'),require('../../assets/images/fangchan/fangchan4.png'),require('../../assets/images/fangchan/fangchan5.png'),require('../../assets/images/fangchan/fangchan6.png'),require('../../assets/images/fangchan/fangchan7.png'),require('../../assets/images/fangchan/fangchan8.png'),require('../../assets/images/fangchan/fangchan9.png')] },
                    { id: 5,title:'财通金融',label:'界面设计 APP',images:[require('../../assets/images/jinrong/jinrong1.png'),require('../../assets/images/jinrong/jinrong2.png'),require('../../assets/images/jinrong/jinrong3.png'),require('../../assets/images/jinrong/jinrong4.png'),require('../../assets/images/jinrong/jinrong5.png'),require('../../assets/images/jinrong/jinrong6.png'),require('../../assets/images/jinrong/jinrong7.png'),require('../../assets/images/jinrong/jinrong8.png')]},
                    { id: 6,title:'商城后台管理',label:'界面设计 后台管理',images:[require('../../assets/images/shop/shop1.png'),require('../../assets/images/shop/shop2.png'),require('../../assets/images/shop/shop3.png'),require('../../assets/images/shop/shop4.png'),require('../../assets/images/shop/shop5.png'),require('../../assets/images/shop/shop7.png'),require('../../assets/images/shop/shop8.png')] },
                    { id: 7,title:'公司官网',label:'界面设计 网页设计',images:[require('../../assets/images/guanw/guanw1.png'),require('../../assets/images/guanw/guanw2.png')]},
                    { id: 8,title:'可视化大屏',label:'界面设计 网页设计',images:[require('../../assets/images/keshihua/keshihua1.png'),require('../../assets/images/keshihua/keshihua2.png'),require('../../assets/images/keshihua/keshihua3.png'),require('../../assets/images/keshihua/keshihua4.png')]},
                    { id: 9,title:'SaaS官网',label:'界面设计 网页设计',images:[require('../../assets/images/saas/saas1.png'),require('../../assets/images/saas/saas2.png'),require('../../assets/images/saas/saas3.png'),require('../../assets/images/saas/saas4.png'),require('../../assets/images/saas/saas5.png'),require('../../assets/images/saas/saas6.png')]},
                    { id: 10,title:'专题活动',label:'专题活动 界面设计',images:[require('../../assets/images/zhuanti/zhuanti1.jpg'),require('../../assets/images/zhuanti/zhuanti2.jpg'),require('../../assets/images/zhuanti/zhuanti3.jpg'),require('../../assets/images/zhuanti/zhuanti4.png')]},
                    { id: 11,title:'海报',label:'平面设计 活动海报',images:[require('../../assets/images/haibao/haibao1.jpg'),require('../../assets/images/haibao/haibao2.jpg'),require('../../assets/images/haibao/haibao3.jpg'),require('../../assets/images/haibao/haibao4.jpg'),] },
                    { id: 12,title:'Banner',label:'平面设计 活动banner',images:[require('../../assets/images/banner/banner1.jpg'),require('../../assets/images/banner/banner2.png'),require('../../assets/images/banner/banner3.png'),require('../../assets/images/banner/banner4.png'),] },
                    { id: 13,title:'露营',label:'AIGC 海报',images:[require('../../assets/images/luying/aigc1.jpg'),require('../../assets/images/luying/aigc2.jpg')] },
                    { id: 14,title:'IP',label:'AIGC 人物IP',images:[require('../../assets/images/ip/aigc3.png'),require('../../assets/images/ip/aigc4.png')] },
                    { id: 15,title:'杭州艺星会员沙龙视频整合',label:'PR视频剪辑',images:[require('../../assets/images/pr/pr1.mp4')] },
                    { id: 16,title:'AE动效',label:'动效设计 gif',images:[require('../../assets/images/ae/jf1.gif'),require('../../assets/images/ae/jf2.gif'),require('../../assets/images/ae/liwuhe.gif'),require('../../assets/images/ae/hujiao.gif')] },
                    { id: 17,title:'C4D',label:'建模练习',images:[require('../../assets/images/c4d/naozhong.png'),require('../../assets/images/c4d/guangying.gif'),require('../../assets/images/c4d/feiji.gif'),require('../../assets/images/c4d/xuexiao.gif'),require('../../assets/images/c4d/guaiwu.jpg')]},
                ];
                this.item = items.find(item => item.id === parseInt(id));
                },
                isImage(image) {
                    console.log('imagessssss...',image)
                    console.log('image...',/\.(jpeg|jpg|png|gif|svg)$/i.test(image))
                    return /\.(jpeg|jpg|png|gif|svg)$/i.test(image);
                },
                isVideo(image) {
                    console.log('image...',/\.(mp4|webm|ogg)$/i.test(image))
                    return /\.(mp4|webm|ogg)$/i.test(image);
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
    color: #ffffff;
}

.header .content .nav .navitem a.active {
    border-top: 0;
    opacity: 1;
    padding: 0 20px;
    line-height: calc(80px - 2px);
    color: #ffffff;
    transition: all .36s ease;
}
.header .content .nav .navitem .subnav{
  background-color:#111;
  border-radius: 30px;
    width: 0;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .20);
    transform: translateX(0) scaleX(0);
    transition: transform 0.2s ease-in-out;
    position: absolute;
    overflow: hidden;
}
.header .content .nav >.navitem:hover .subnav{
    transform: translateX(-82px) scale(1);
    padding:20px;
    width: 180px;

}
.header .content .nav .navitem i{
  font-size: 8px;
    padding-left: 6px;
}
.detail_img{
    margin-bottom:60px;
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
    margin-top:40px;
}

</style>
