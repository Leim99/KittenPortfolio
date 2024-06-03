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
            <div class="banner" :style="{opacity: bannerScroll}">
            <div class="header_img">
            </div>
            </div>
            <div id="pageTarget" class="ff_pageTarget module">
                <div class="module_container">
                    <div class="container_header wow hide" style="visibility: visible; animation-name: fadeInUp;">
                        <p class="title">我的作品</p>
                    </div>
                    <div class="container_target wow" style="visibility: visible; animation-name: fadeInUp;">您的位置：
                        <a @click="go_dec(0)">首页</a><i class="iconfont icon-you"></i>
                        <a>我的作品</a>
                    </div>
                  <div class="tabs">
                    <div class="tab-slider" :style="sliderStyle"></div>
                    <button v-for="(tab, index) in tabs" :key="index" @click="moveSlider(index)" :class="{ active: activeIndex === index}">
                      {{ tab.title }}
                    </button>
                  </div>
                  <div name="slide" tag="div" class="tab-content">
                      <div v-for="(item, index) in tabs[activeIndex].items" :key="item.id" class="item" @click="goToDetails(item.id)" v-on:mouseenter="onMouseEnterBlog(index, $event)"
                      v-on:mouseleave="onMouseLeaveBlog(index, $event)">
                      <div class="item_img">
                      <div class="imgMask" :style="item.rightShow==true?'transition: all 0.36s ease;':'background-color:rgba(0,0,0,0.3)'"></div>
                        <img :src="item.image" alt="Image"  :style="item.rightShow==true?'transition: transform 0.3s ease-in-out; transform-origin: center;transform: scale(1.1);':'transition: transform 0.3s ease-in-out; transform-origin: center;'"/>
                    </div>
                    <div class="item_info">
                        <div class="leftCon" :style="item.rightShow==true?'padding-left:10px;transition: all 0.6s ease 0s;':'transition: all 0.6s ease 0s;'">
                        <div class="item_title" :style="item.rightShow==true?'color:#EB740C':''">{{ item.title }}</div>
                        <div class="item_label">{{item.label}}</div>
                    </div>
                    <a href class="right_more" :style="item.rightShow==true?'opacity:1;padding-right:10px;transition: all 0.6s ease 0s;':'transition: all 0.6s ease 0s;opacity:0'">
                    <i class="iconfont icon-jiantou"></i>
                  </a>
                </div>
                </div>
                  </div>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'KittenBlogIndex',
    data() {
        return {
            scrollHeight: 0,
            currentTab: 0,
            activeIndex: 0,
            sliderWidth: 0,
            sliderOffset: 0,
            activeTab: null,
            bannerScroll:1,
            downloadPortfolioUrl: '/雷敏的UI作品集和简历.zip',
      tabs: [
        {
          title: 'C端设计',
          items: [
            { id:1, title: '杭州艺星小程序', image: require('../../assets/images/fengmian/yestar.png'),label:'界面设计 小程序',rightShow:false  },
            { id:2, title: '变美功课bot', image: require('../../assets/images/fengmian/anlifenx.png'),label:'界面设计 小程序' ,rightShow:false },
            { id:3, title: '大娱互娱直播', image: require('../../assets/images/fengmian/zhibo.png'),label:'界面设计 APP',rightShow:false },
            { id:4, title: '房又家找房', image: require('../../assets/images/fengmian/fangyj.png'),label:'界面设计 APP',rightShow:false },
            { id:5, title: '财通金融', image: require('../../assets/images/fengmian/jinrong.png'),label:'界面设计 APP',rightShow:false },
          ]
        },
        {
          title: 'B端设计',
          items: [
            { id:6, title: '商城后台管理', image: require('../../assets/images/fengmian/shop.png'),label:'界面设计 后台管理',rightShow:false },
            { id:8, title: '公司官网', image: require('../../assets/images/fengmian/guanw.png'),label:'界面设计 网页设计',rightShow:false },
            { id:9, title: '可视化大屏', image: require('../../assets/images/fengmian/keshihua.png'),label:'界面设计 可视化',rightShow:false },
            { id:7, title: 'SAAS官网', image: require('../../assets/images/fengmian/saas.png'),label:'界面设计 网页设计',rightShow:false }
          ]
        },
        {
          title: '运营设计',
          items: [
            { id:10, title: '专题活动', image: require('../../assets/images/fengmian/zhuanti.png'),label:'界面设计 专题活动',rightShow:false },
            { id:11, title: '海报', image: require('../../assets/images/fengmian/haibao.png'),label:'平面设计 活动海报',rightShow:false },
            { id:12, title: 'Banner', image: require('../../assets/images/fengmian/banner.jpg'),label:'平面设计 活动banner',rightShow:false },
          ]
        },
        {
          title: 'AIGC相关',
          items: [
            { id:13, title: '露营', image: require('../../assets/images/fengmian/aigchaibao.png'),label:'AIGC 露营海报 ',rightShow:false },
            { id:14, title: 'IP', image: require('../../assets/images/fengmian/aigcip.png'),label:'AIGC 人物IP形象',rightShow:false }
          ]
        },
        {
          title: '其他',
          items: [
            { id:15, title: '杭州艺星会员沙龙视频整合', image: require('../../assets/images/fengmian/shipinjianji.png'),label:' PR视频剪辑',rightShow:false },
            { id:16, title: 'AE动效', image: require('../../assets/images/fengmian/dongxiao.png'),label:'动效设计 gif',rightShow:false },
            { id:17, title: 'C4D', image: require('../../assets/images/fengmian/c4d.png'),label:'建模练习',rightShow:false },
          ]
        }
      ]
        };
    },
    watch: {
    //     '$route.params': function(toParams) {
    //   // 监听路由参数变化，更新 activeTab
    //   this.activeTab = toParams.activeTab;
    //   this.activeIndex = this.activeTab
    // console.log('this.activeIndex...9999',this.activeIndex)
    // }
    // '$route.query': function (toParams) {
    //   // 监听路由参数变化，更新活动Tab索引
    //   const tabIndex = toParams.tab;
    //   if (tabIndex !== undefined) {
    //     this.activeIndex = parseInt(tabIndex, 10);
    //   }
    //   console.log('00000',toParams.tab)
    // }
    '$route.query.tab'(newValue) {
      if (newValue !== undefined && this.tabs[newValue]) {
        this.activeIndex = newValue;
      } else {
        console.error('Invalid tab index provided by route.');
        // 可以选择重置到默认 tab 或进行其他错误处理
      }
    }
  },
    created() {
        // this.activeIndex = this.$route.query.id;
        // console.log('this.activeTab...111',this.activeIndex)
        const tabParam = this.$route.query.tab;
    if (tabParam !== undefined && this.tabs[tabParam]) {
      this.activeIndex = tabParam;
      console.log('this.activeIndex.....123',this.activeIndex)
    }
  },
    mounted() {
        // 页面滚动监听
        console.log('this.$route.query.id',this.$route.query.id)
    window.addEventListener('scroll', this.handleScroll);
    // 我的作品tab
    this.activeTab = this.tabs[0]; 
    this.$nextTick(() => {
      this.updateSlider();
    });
    },
//     beforeDestroy() {
//     window.removeEventListener('scroll', this.handleScroll);
//   },
    methods: {
        // 我的作品tab切换定位
        moveSlider(index) {
      this.activeIndex = index;
      this.$nextTick(this.updateSlider);  // 确保状态变更后调用
      this.$router.push({ name: 'production', query: { tab: index } });
    //   if (this.tabs[index]) {
    //   this.activeIndex = index;
    //   this.$router.push({ name: 'production', params: { tab: index } });
    // } else {
    //   console.error(`Tab at index ${index} does not exist.`);
    //   // 你可以在这里添加额外的错误处理逻辑，比如重置 activeIndex 到一个有效的值
    // }
    },
    // 我的作品tab切换效果
    updateSlider() {
      const activeTab = this.$el.querySelectorAll('button')[this.activeIndex];
      if (activeTab) {
        this.sliderWidth = activeTab.offsetWidth;
        this.sliderOffset = activeTab.offsetLeft;
        console.log('Slider updated:', this.sliderWidth, this.sliderOffset); // 调试信息
      } else {
        console.error('Active tab element is not found.');
      }
    },
    // 顶部标签切换
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
        // 顶部滑动监听
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollHeight = scrollTop
            const scrollY = window.scrollY;
            const maxScroll = 200; // 调整为你需要的值
            this.bannerScroll = Math.max(0, 1 - scrollY / maxScroll);
        },
        // 进入详情页
        goToDetails(id) {
      this.$router.push({ name: 'productionDetail', query: { id: id } });
    },
    onMouseEnterBlog(index, event) {
      // 这里可以执行鼠标进入时的逻辑
      this.tabs[this.activeIndex].items[index].rightShow = true;
      console.log('hover..1')
    },
    onMouseLeaveBlog(index, e) {
      // 这里可以执行鼠标离开时的逻辑
      this.tabs[this.activeIndex].items[index].rightShow = false;
      console.log('hover..2')
    },
    },
    computed: {
        // 我的作品tab切换滑动样式
        sliderStyle() {
    const style = {
      width: `${this.sliderWidth}px`, 
      transform: `translateX(${this.sliderOffset}px)`
    };
    console.log('sliderStyle:', style);
    return style;
  },
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
.production_layout .header_img{
    background-image: url("../../assets/images/heade-bg.png");
    height: 626px;
    background-repeat: no-repeat;
    position: relative;
    /* background-attachment:fixed; */
    background-position:center;
}
.production_layout .banner{
    position: relative;
}
.production_layout .banner:after{
    content: "";
    background-image: linear-gradient(to top, #181818, transparent);
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 50%;
}
.module_container {
    max-width: 90%;
    margin-top: 0px;
    position: relative;
    margin: 0 auto;
}
.module_container .container_header {
    display: block;
    text-align: center;
}
.module_container .container_header .title {
    color: #fff;
    font-size: 40px;
    line-height: 60px;
}
.container_target {
    text-align: center;
    margin-bottom: 70px;
    float: inherit;
}

.container_target  a{
    color:#666666;
    cursor: pointer;
}
.container_target i{
    font-size: 8px;
    padding: 0 10px;
    color:#666666;
}
.container_target a:last-child, .ff_pageTarget .container_target a:hover{
    color:#ffffff;
}
.module_container .tabs{
    border:1px solid rgba(255,255,255,0.1);
    border-radius: 50px;
    display: table;
    float: unset;
    margin:0 auto;
    position: relative;
    height: 55px;
    line-height: 56px;
}
.module_container .tabs a{
    padding:14px 50px;
    /* display: inline-block; */
    font-size: 15px;
    vertical-align: middle;
  line-height: normal;
}
.module_container .tabs .move{
    width: 0;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50px;
    pointer-events: none;
}
.module_container .tabs a.active{
    color:#181818;
    position: relative;
    z-index: 1;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  position: absolute;
  width: 100%;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-active {
  transform: translateX(-100%);
}
.tab-content {
  position: relative;
  width: 100%;
  overflow: hidden;
    display: table;
    padding-top: 80px;
    text-align: left;
} 
.tab-content .item{
    width: calc(100% / 2 - 40px);
    margin-bottom: 40px;
    margin-right: 40px;
    display:inline-block;
    cursor: pointer;

}  
.tab-content .item_img{
    position: relative;
    display: block;
    overflow: hidden;
}
.tab-content .item_info{
  position: inherit;
    top: auto;
    left: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 0;
    transition: all 0.6s ease 0s;
  color:#7d7d7d;
  text-align: left;
  position: relative;
}
.tab-content .imgMask{
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.tab-content .item img{
    width:100%;
}
.tab-content .item .item_title{
    font-size: 20px;
    padding:20px 20px 0;
    text-align: left;
    color:#ffffff;
}
.tab-content .item .item_label{
    font-size: 12px;
    padding:10px 20px;
    color:#828282;
    text-align: left;
}
.tab-content .item:hover >.item_label{
    color:#ffffff;
}
.tab-content .right_more{
  opacity: 0;
  display: block;
    width: 32px;
    height: 32px;
    transition: all 0.6s ease 0s;
    position: absolute;
    bottom: 25px;
    right: 0px;
    border: 0;
    padding: 0;
    line-height: 32px;
    left: auto;
    overflow: hidden;
}
.tab-content .right_more i{
  color:#7d7d7d;
  position: absolute;
    top: 0px;
    left: 0px;
    transition: all 0.36s ease 0s;
    font-size: 14px;
}
.tabs {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

button {
  padding: 10px 30px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  color:#ffffff;
}

button.active {
  color: #181818;
  position: relative;
}

.tab-slider {
    position: absolute;
    bottom: 0;
    height: 54px;
    background-color: white;
    transition: transform 0.3s ease-in-out;
    z-index: 0;
    border-radius: 50px;
}
</style>
