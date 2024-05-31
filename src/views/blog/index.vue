<template>
        <div class="wel_layout" @scroll="handleScroll">
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
                      <span title="首页 ">首页{{ currentScrollAmount }} </span>
                    </a>
                  </li>
                  <li class="navitem">
                    <a @click="go_dec(2)" target="_self">
                      <span title="我的作品">我的作品</span>
                    </a>
                  </li>
                  <li class="navitem">
                    <a @click="go_dec(3)" target="_self">
                      <span title="博客">博客</span>
                    </a>
                  </li>
                  <li class="navitem">
                    <a>
                      <span title="PDF作品集">下载附件<i class="iconfont icon-xia"></i></span>
                    </a>
                    <ul class="subnav">
                      <li><a>PDF作品集下载</a></li>
                      <li><a>个人简历下载</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div class="blog_content"></div>
    <div class="footer">
        <div class="footer_content">
          <div class="foot_left">
            <img class="foot_logo" src="../../assets//images//kitten_foot.png"/>
            <div class="footleft_text">期望工作城市：广东深圳</div>
            <div class="footleft_text">电话：15342823165</div>
            <div class="footleft_text">邮箱：15342823165@163.com</div>
            <img class="wechaticon" @click="showCodeClick()" src="../../assets//images/微信.png"/>
          </div>
          <div class="foot_right">
            <hr/>
            <div class="footRight_text">
                若您觉得我符合贵司的要求，请给予一个面试机会吧，让我们进一步沟通了解！<br/>
                很期待能为贵司贡献我的专长并带来实际的效益。
            </div>
          </div>
        </div>
        <p class="footer_bottom">
          <span>KITTEN DESIGN 2024 - 作品集展示</span>
        </p>
        <div class="mask_wechat" v-show="showCode" @click="closeCodeClick">
          <img @click.stop src="../../assets//images/wechat-code.png"/>
        </div>
      </div>
            </div>
          </template>
  <!-- <div @mousemove="moveElement" class="container">
    <div ref="floatingElement" class="floating-element">
      More
    </div>
  </div> -->

<script>
export default {
  data() {
    return {
      scrollHeight: 0,
      showCode:false,
      currentScrollAmount: 0,

    };
  },
  methods: {
    go_dec(index) {
      if (index == 0) {
        this.$router.push({
          path: "/",
        });
      }
      if(index==1){
        this.$router.push({
          path: "/",
        });
      }
      if(index==2){
        this.$router.push({
          path: "/production",
        });
      }
      if(index==3){
        this.$router.push({
          path: "/blog",
        });
      }
    },
    showCodeClick(){
      this.showCode =true
    },
    closeCodeClick(){
      this.showCode =false
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollHeight = scrollTop
      // 判断滚动方向，增加还是减少currentScrollAmount
      if (scrollTop > this.lastScrollTop) {
        // 向下滚动
        if (scrollTop > 1000 && scrollTop <= 3000) {
          this.currentScrollAmount -= 3;
        }
      } else {
        // 向上滚动
        if (scrollTop > 1000 && scrollTop <= 3000) {
          this.currentScrollAmount += 3;
        }
      }

      // 更新lastScrollTop以供下次调用比较
      this.lastScrollTop = scrollTop;
    },
    // moveElement(event) {
    //   const element = this.$refs.floatingElement;
    //   const rect = element.getBoundingClientRect();
    //   // Adjust the target position so that cursor is always at the center of the element
    //   this.targetX = event.clientX - rect.width / 2;
    //   this.targetY = event.clientY - rect.height / 2;
    //   // Kick off the animation if it's not already running
    //   if (!this.reqAnimation) {
    //     this.animate();
    //   }
    // },
    // animate() {
    //   const element = this.$refs.floatingElement;
    //   const elementStyle = element.style;
    //   let currentX = parseFloat(elementStyle.left) || 0;
    //   let currentY = parseFloat(elementStyle.top) || 0;

    //   if (Math.abs(currentX - this.targetX) < 0.1 && Math.abs(currentY - this.targetY) < 0.1) {
    //     elementStyle.left = this.targetX + 'px';
    //     elementStyle.top = this.targetY + 'px';
    //     this.reqAnimation = null; // Stop animation
    //   } else {
    //     // Smooth transition by moving 10% of the distance per frame
    //     currentX += (this.targetX - currentX) * 0.1;
    //     currentY += (this.targetY - currentY) * 0.1;
    //     elementStyle.left = currentX + 'px';
    //     elementStyle.top = currentY + 'px';
    //     this.reqAnimation = requestAnimationFrame(this.animate); // Continue animation
    //   }
    // }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
  .wel_layout {
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
  background-color: #181818;
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
  display: block;
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
.header .content .nav .navitem i{
  font-size: 8px;
    padding-left: 6px;
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
.footer{
  background-color:#111111;
}
.footer_content{
  width: 90%;
  margin:0 auto;
  display: inline-block;
  padding:80px 0 10px;
}
.foot_left{
  float: left;
    width: 50%;
    color:#989898;
    font-size: 14px;
    text-align: left;
}
.foot_left img.foot_logo{
  margin-bottom:30px;
}

.foot_left img.wechaticon{
  margin-top:30px;
  cursor: pointer;
}
.footleft_text{
  line-height: 30px;
}
.foot_right{
  width: 50%;
    float: right;
    text-align: left;
    position: relative;
}
.foot_right hr{
  background-color:#ffffff;
  opacity: 0.2;
  width: 284px;
  display: inline-block;
}
.foot_right .footRight_text{
  font-size: 14px;
  color:#989898;
  line-height: 24px;
    margin-top: 30px;
}
.footer_bottom{
  text-align: left;
    width: 90%;
    display: inline-block;
    padding:10px 0;
    color:#666666;
}
.mask_wechat{
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;
}
.mask_wechat img{
  width:25%;
}
.container {
  height: 100vh;
  /* Full height of the viewport */
  position: relative;
  /* Allows absolute positioning inside */
  background-color: #000;
  /* Red background color */
}

.floating-element {
  position: absolute;
  /* Absolute positioning to move freely */
  background-color: #ffff00;
  /* Yellow background color */
  padding: 50px 50px;
  border-radius: 50%;
  /* 50% circle */
  cursor: pointer;
  transition: left 0.1s linear, top 0.1s linear;
  width: 50px;
  /* Set width */
  height: 50px;
  /* Set height */
}
</style>
