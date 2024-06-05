<!--
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-16 16:45:54
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-06-05 17:53:50
 * @FilePath: /kitten-blog/src/views/main/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
              <a @click="go_dec(1)" class="active">
                <span title="首页">首页</span>
              </a>
            </li>
            <li class="navitem">
              <a @click="go_dec(2)" >
                <span title="我的作品">我的作品</span>
              </a>
            </li>
            <!-- <li class="navitem">
              <a @click="go_dec(3)" >
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
    <div class="layout_content">
      <div class="layout_top_bg">
        <!-- 个人信息 -->
        <div class="layout_top_content">
          <div class="layout_top_hello">
            <img class="for_top_img" src="../../assets//images/hello.png" />
            <div class="avatar_infor">
              <div class="avatar_img">
                  <div class="solidtwo"><div class="solidone">
                <img src="../../assets/images/头像.png" />
              </div></div>
              </div>
              <div class="name_information">
                <p class="name">雷敏 28岁</p>
                <p class="information">5年UI设计工作经验，2年前端开发工作经验，能陪产品做定位，能陪开发找bug；<br/>懂交互，注重用户体验；能独立完成整个项目的设计。</p>
              </div>
            </div>
          </div>
          <div class="personal_infor">
            <div class="infor_title">
              <span>Information</span>
            </div>
            <div class="infor_con">
              <table>
                <tr>
                  <td>
                    <p>湖北工程学院</p>
                    <span>school</span>
                  </td>
                  <td>
                    <p>软件技术</p>
                    <span>specialty</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>15342823165</p>
                    <span>tel</span>
                  </td>
                  <td>
                    <p>15342823165@163.com</p>
                    <span>email</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- 个人介绍 scrollHeight<=2000?'background-position:center '+'0':'background-position:center '+ currentScrollAmount-->
      <div class="content_personal" :style="{ backgroundPosition: 'center ' + currentScrollAmount + 'px' }">
        <div class="infor_experience">
          <div class="exper_title">
            <p>Experience</p>
            <span>工作经历</span>
          </div>
          <div class="exper_con">
            <div class="timeline">
              <div v-for="(item, index) in timelineItems" class="event" :key="index">
                <div class="time_content">
                  <span class="date">{{ item.afterTime }}<br />
                    /<br />
                    {{ item.beforeTime }}</span>
                  <div class="time_content_right">
                    <h3>{{ item.title }}</h3>
                    <ul>
                      <li v-for="(descItem, descIndex) in item.description" :key="descIndex">{{ descItem }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 技能 -->
        <div class="content_skill">
          <div class="skill_title">
            <p>Skill</p>
            <span>工作技能{{ scrollHeight }}</span>
            <div class="skill_text">
              熟练使用Sketch、PS、AI、Figma、Axure、XD等主流设计软件；了解HTML、CSS、JS等前端语言；了解AIGC工具（ChatGPT、Midjourney）。
            </div>
          </div>
          <div class="skill_con">
            <img src="../../assets/images/skill_pic.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- 作品 -->
    <!-- @mousemove="moveElement" @mouseleave="moveElement_" ref="floatingElement" -->
    <div class="floating_box">
      <div class="cration_title" @click="toProduction">
            <img src="../../assets/images/mycration.png" />
      </div>
      <div class="mycration carousel-container">
         <button @click="prev" :style="toNext==true?'opacity:1':'opacity:0.2;cursor:auto;'"  class="nav-button nav-button-left"><i class="iconfont icon-zuo"></i></button>
        <div class="cration_content carousel">
          <ul class="content_list carousel-track"
          :style="trackStyle">
            <li v-for="(item, index) in crationItems" :key="index" v-on:mouseenter="onMouseEnter(index, $event)"
              v-on:mouseleave="onMouseLeave(index, $event)" @click="goToProductionPage(item)"  class="hover-box serviceitem carousel-item" style="width:30%" :style="item.moreShow==true?'padding-top:50px;padding-bottom:50px':''">
              <a class="serviceitem_content">
                <i :class="'iconfont ' + item.icon" :style="item.moreShow==true?'font-size:36px':''"></i>
                <div class="service_info">
                  <p class="title" :style="item.moreShow==true?'color:#EB740C':''">{{ item.title }}</p>
                  <p class="subtitle hide"></p>
                  <p class="description">
                  <ul>
                    <li v-for="(descItem, descIndex) in item.description" :key="descIndex">
                      {{ descItem }}
                    </li>
                  </ul>
                  </p>
                </div>
              </a>
              <!-- v-show="item.moreShow" -->
              <!-- <a class="more_icon" v-show="item.moreShow"><i class="iconfont icon-jiantou"></i></a> -->
            </li>
          </ul>
          <!-- <el-button class="more_btn">
            <span>MORE</span>
          </el-button> -->
        </div>
        <button @click="next" :style="toNext==true?'opacity:1':'opacity:0.2;cursor:auto;'" class="nav-button nav-button-right"><i class="iconfont icon-you"></i></button>
      </div>
    </div>
    <!-- 博客 -->
    <!-- <div class="blog_content">
      <div class="blog_title">
        <p>Blog</p>
        <span>我的博客</span>
      </div>
      <div class="blog_con">
        <ul>
          <li v-for="(item, index) in blogItems" v-on:mouseenter="onMouseEnterBlog(index, $event)"
          v-on:mouseleave="onMouseLeaveBlog(index, $event)">
            <div class="blog_img">
                <div class="imgMask" :style="item.rightShow==true?'transition: all 0.36s ease;':''"></div>
              <img :src="item.img" :style="item.rightShow==true?'transition: transform 0.3s ease-in-out; transform-origin: center;transform: scale(1.1);':'transition: transform 0.3s ease-in-out; transform-origin: center;'"/>
            </div>
            <div class="blog_info">
              <div class="leftCon" :style="item.rightShow==true?'padding-left:10px;transition: all 0.6s ease 0s;':'transition: all 0.6s ease 0s;'">
              <p class="title" :style="item.rightShow==true?'color:#EB740C':''">{{ item.title }}</p>
              <p class="info">{{ item.info }}</p>
            </div>
            <a href class="right_more" :style="item.rightShow==true?'opacity:1;padding-right:10px;transition: all 0.6s ease 0s;':'transition: all 0.6s ease 0s;opacity:0'">
              <i class="iconfont icon-jiantou"></i>
            </a>
            </div>
          </li>
        </ul>
        <button class="more_btn">
          <span>MORE</span>
        </button>
      </div>
    </div> -->
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
<script>
// import { kslist } from "@/api/index";
export default {
  data() {
    return {
      scrollHeight: 0,
      currentScrollAmount: 0,
      lastScrollTop: 0,
      targetX: 0,
      targetY: 0,
      reqAnimation: null,
      showCode:false,
      currentPage: 0,
      itemsPerPage: 3,
      toNext:true,
      downloadPortfolioUrl: '/雷敏的UI作品集和简历.zip',
      crationItems: [
        {id:0, icon: 'icon-cduan', title: 'C端设计', description: ['杭州艺星小程序', '变美功课bot小程序', '大娱互娱直播APP','房又家APP','财通金融APP'], moreShow: false, },
        {id:1, icon: 'icon-bduan', title: 'B端设计', description: ['商城后台管理系统', 'SAAS官网', '公司官网','可视化大屏'], moreShow: false, },
        {id:2, icon: 'icon-yunying', title: '运营设计', description: ['专题活动','海报','Banner'], moreShow: false, },
        {id:3, icon: 'icon-aigc', title: 'AIGC相关', description: ['露营', 'IP人物'], moreShow: false, },
        {id:4, icon: 'icon-shipinjianji', title: '其他', description: ['视频剪辑','AE动效','C4D练习'], moreShow: false, }
      ],
      timelineItems: [
        { beforeTime: '2022.05', afterTime: '2024.04', title: '杭州艺星医疗美容医院有限公司', description: ['根据产品需求，参与项目评审体验用户调研与分析，深入了解业务流程，抓住痛点独立完成整个项目的设计；', '根据产品经理提出的迭代需求与用户体验需求，提出产品视觉效果进行优化；', '与开发和产品对接，跟进产品实现、测试并保证产品的质量，已跟进上线3款小程序和6个后台管理系统；', '独立配合运营完成 banner、H5等活动页面设计。','可查看已上线小程序《杭州艺星》《变美功课bot》'] },
        { beforeTime: '2019.05', afterTime: '2022.03', title: '杭州巨大电子商务有限公司', description: ['负责公司互联网产品 APP、web、h5用户界面设计工作，根据客户需求设计 logo、banner；', '与产品经理讨论进行需求分析，参与部分原型稿设计工作；', '与开发人员密切配合，确保 UI界面还原度；', '负责线上产品测试工作，网页浏览器的各种兼容性和不同手机的适配。'] },
        { beforeTime: ' 2017.06', afterTime: '2019.04', title: '深圳摩岩网络科技有限公司', description: ['负责 APP、H5的开发；', '根据产品需求完成静态页面及交互功能的编写；', '完成简单的前后端联调；', '修复测试和验收过程中的 bug。','可查看已上线APP《秒书》'] }
      ],

      blogItems: [
        { img: require('../../assets/images/bg6.jpg'), title: '后陡门的夏', info: '一切顺利',rightShow:false },
        { img: require('../../assets/images/bg9.jpg'), title: '后陡门的夏', info: '一切顺利' ,rightShow:false},
        { img: require('../../assets/images/bg5.jpg'), title: '后陡门的夏', info: '一切顺利' ,rightShow:false},
        { img: require('../../assets/images/bg7.jpg'), title: '后陡门的夏', info: '一切顺利' ,rightShow:false},
      ],
    }
  },
  computed: {
    itemWidth() {
      return 60 / this.itemsPerPage; // 每个项目的宽度百分比
    },
    trackStyle() {
      return {
        transform: `translateX(${this.currentTransform}%)`,
        width: `${this.crationItems.length * this.itemWidth}%`,
      };
    },
    currentTransform() {
      return -(this.currentPage * 100/3 *2); // 每页移动100%
    },
    totalPages() {
      return Math.ceil(this.crationItems.length / this.itemsPerPage);
    },
    itemsToShow() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.crationItems.slice(start, end);
    }
  },

  methods: {
    go_dec(index) {
      if (index == 0) {
        this.$router.push({
          path: "/desc",
        });
      }
      if(index==1){
        this.$router.push({
          path: "/",
        });
      }
      if(index==2){
        this.$router.push({
          name: "production",
          query:{
            id:0
          }
        });
      }
      if(index==3){
        this.$router.push({
          path: "/blog",
        });
      }
    },
    toProduction(){
      this.$router.push({
        name: "production",
          query:{
            id:0
          }
        });
    },
    animate() {
      const element = this.$refs.floatingElement;
      const elementStyle = element.style;
      let currentX = parseFloat(elementStyle.left) || 0;
      let currentY = parseFloat(elementStyle.top) || 0;

      if (Math.abs(currentX - this.targetX) < 0.1 && Math.abs(currentY - this.targetY) < 0.1) {
        elementStyle.left = this.targetX + 'px';
        elementStyle.top = this.targetY + 'px';
        this.reqAnimation = null; // Stop animation
      } else {
        // Smooth transition by moving 10% of the distance per frame
        currentX += (this.targetX - currentX) * 0.1;
        currentY += (this.targetY - currentY) * 0.1;
        elementStyle.left = currentX + 'px';
        elementStyle.top = currentY + 'px';
        this.reqAnimation = requestAnimationFrame(this.animate); // Continue animation
      }
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
    onMouseEnter(index, event) {
      // 这里可以执行鼠标进入时的逻辑
      this.crationItems[index].moreShow = true
      console.log('hover..1')
    },
    onMouseLeave(index, e) {
      // 这里可以执行鼠标离开时的逻辑
      this.crationItems[index].moreShow = false
      console.log('hover..2')
    },
    onMouseEnterBlog(index, event) {
      // 这里可以执行鼠标进入时的逻辑
      this.blogItems[index].rightShow=true
      console.log('hover..1')
    },
    onMouseLeaveBlog(index, e) {
      // 这里可以执行鼠标离开时的逻辑
      this.blogItems[index].rightShow=false
      console.log('hover..2')
    },
    showCodeClick(){
      this.showCode =true
    },
    closeCodeClick(){
      this.showCode =false
    },
    prev() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    next() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    goToProductionPage(item) {
      console.log('Passing activeTab:',item.id);
      // const activeTab = item.id // || '1'; 如果 item.tab 不存在，则使用默认值
    this.$router.push({
      name: 'production',
      query: {
        id: item.id,
        // activeTab: activeTab
      }
    });

    // console.log('Passing activeTab22:', activeTab);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
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
.layout_top_bg {
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0),rgba(48,33,23,1));
  /* height: 1360px; */
  background-repeat: no-repeat;
  position: relative;
  padding-bottom:100px;
}

.layout_top_content {
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-image: url("../../assets/images/color-bg.png");

}

.layout_top_content .layout_margin_top {
  padding-top: 14%;
}

.layout_top_content .layout_top_hello {
  /* width: 40%; */
  margin: 200px auto 0;
  transition: transform 0.5s, background-color 0.5s;
}

.avatar_img {
  height: 240px;
  width: 240px;
  border-radius: 50%;
  overflow: hidden;
  margin: 40px auto 0;
  border:1px solid rgba(255,255,255,0.1);
  padding:16px;
}

.avatar_img .solidone{
  box-shadow: 0 0px 20px rgba(255, 145, 43, 0.72);
  border:1px solid rgba(255,213,105,0.60);
  display: inline-flex;
}
.avatar_img .solidone,.avatar_img .solidtwo{
  border-radius: 50%;
  overflow: hidden;
}
.avatar_img .solidtwo{
  border:1px solid rgba(255,255,255,0.2);
  padding:16px;
}
.avatar_img img {
  max-width: 100%;
}

.avatar_img::before {
  content: '';
  border-radius: 6px;
  position: absolute;
  left: 50%;
  width: 2px;
  height: 40px;
  bottom: 126px;
  margin-left: -1px;
  background: linear-gradient(#FFF, transparent);
}

.avatar_img::after {
  content: '';
  display: block;
  border-radius: 6px;
  position: absolute;
  left: 50%;
  width: 10px;
  height: 10px;
  bottom: 164px;
  margin-left: -5px;
  background-color: #FFF;
}

.avatar_infor {
  list-style: none;
  position: relative;
  visibility: visible;
  animation-delay: 0s;
}
.name_information {
  color: #ffffff;
  font-size: 14px;
  margin: 50px auto;
  /* width: 500px; */
}

.name_information .name {
  font-size: 30px;
  font-weight: 600;
}

.name_information .information {
  line-height: 30px;
  opacity: 0.7;
  font-size: 18px;
  /* font-weight: 600; */
}

.personal_infor,
.infor_experience,
.content_skill {
  color: #ffffff;
  width: 90%;
  position: relative;
  display: flex;
  box-sizing: border-box;
  margin: 200px auto 0;
  transition: transform 0.5s, background-color 0.5s;
}

.personal_infor .infor_title,
.infor_experience .exper_title,
.content_skill .skill_title {
  width: 40%;
  /* height: 30px; */
  /* margin:30px 0; */
  text-align: left;
}

.infor_title span,
.exper_title span,
.skill_title span,
.blog_content.blog_title span {
  font-size: 18px;
  opacity: 0.5;
}

.personal_infor .infor_con,
.infor_experience .exper_con,
.content_skill .skill_con {
  width: 60%;
}

.content_skill {
  margin: 0 auto;
}

.content_skill .skill_text {
  font-size: 14px;
  line-height: 26px;
  padding-top: 150px;
}

.content_skill .skill_con {
  padding-top: 200px;
  padding-bottom: 120px;
  text-align: right;
}

.content_skill .skill_con img {
  width: 60%;
}

.personal_infor .infor_con p {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 8px;
}

.personal_infor .infor_con span {
  font-size: 14px;
  opacity: 0.7;
}

.infor_con table {
  table-layout: fixed;
  width: 100%;
}

.infor_con td {
  text-align: left;
}

.content_personal {
  background-image: url("../../assets/images/bg8.png");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center 20px; */
  background-attachment: fixed;
}

.content_personal.personal_bg {
  background-position: center 200px;
}

.infor_experience {
  margin-top: 0px;
}

.exper_title {
  text-align: left;
}

.exper_title p,
.skill_title p,
.blog_title p {
  font-size: 52px;
  font-weight: 600;
  margin-bottom: 16px;
}

.timeline {
  position: relative;
  padding: 200px 0 100px;
  list-style: none;
}

.timeline .event {
  position: relative;
  margin-bottom: 20px;
}

.timeline .event:before {
  content: '';
  position: absolute;
  left: 0;
  top: 26px;
  width: 10px;
  background: #999999;
  height: 10px;
  border-radius: 50%;
}

.timeline .time_content {
  margin-left: 30px;
  /* Same as width of .event:before */
  padding: 10px;
  position: relative;
  display: flex;
}

.timeline .time_content .time_content_right {
  text-align: left;
  padding-left: 60px;
}

.timeline .time_content .time_content_right h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
}

.timeline .time_content .time_content_right li {
  font-size: 14px;
  opacity: 0.7;
  line-height: 25px;
}

.timeline .date {
  font-size: 14px;
  opacity: 0.7;
  line-height: 16px;
}

.timeline:after {
  content: '';
  position: absolute;
  left: 4px;
  top: 236px;
  height: 358px;
  width: 2px;
  background: #999999;
}

.cration_title img {
  width: 100%;
  cursor: pointer;
}

.mycration,
.blog_content {
  width: 90%;
  padding: 0 0 100px;
  margin: 0 auto
}

.mycration .content_list {
  display: flex;
}

.content_list .serviceitem {
  cursor: pointer;
  padding: 30px 30px 80px;
  margin-top: 30px;
  position: relative;
  transition:all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  transition:all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.content_list .serviceitem:hover {
  background-color: #252525;
}

.content_list .serviceitem_content i{
  font-size: 32px;
  color: #7d7d7d;
  transition: all 0.3s ease 0s;
}
.mycration .service_img i {
  font-size: 52px;
}

.mycration .title {
  font-size: 18px;
}

.mycration .description {
  font-size: 14px;
  opacity: 0.5;
  line-height: 20px;
}
.mycration .description li{
  line-height:24px;
}
.mycration .more_icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #EB740C;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  cursor: pointer;
}

.mycration .more_icon i {
  font-size: 14px;
}

.more_btn {
  cursor: pointer;
      position: relative;
  height: 52px;
  width: 316px;
  border-radius: 0px;
  color:#828282;
  background-color: #323232;
  border: 0;
  font-size: 16px;
  margin-top: 80px;
  background-image: linear-gradient(to top, transparent 100%, #ff5f6d 100%);
  background-size: 100% 200%;
  background-position: bottom;
display: inline-block;
  transition: color 0.3s ease;
}
.more_btn span{
  position: relative;
  z-index: 2;
}
.more_btn:hover {
  /* background-color: #EB740C; */
  color: #ffffff;
  background-position: bottom;
}
.more_btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 0%;
      background-color: #EB740C;
      transition: height 0.3s ease, top 0.3s ease;
      transform: translateX(-50%);
      z-index: 1; /* 把伪元素放在按钮文本后面 */
    }
    .more_btn:hover::before {
      height: 100%;
      top: 0;
    }
.el-button:active{
  color:#606266;
}

.blog_content .blog_title {
  text-align: left;
}

.blog_content .blog_con {
  margin-top: 100px;
}

.blog_content .blog_con ul {
  display: flex;
}

.blog_content .blog_con ul li {
  width: calc(25% - 20px);
  margin: 0 20px 20px 0;
}
.floating_box {
  width: 100%;
  position: relative;
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
.blog_con .blog_img{
    position: relative;
    display: block;
    overflow: hidden;
}
.blog_con .blog_img img{
  width:100%;
}
.blog_con .blog_info{
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
.blog_con .blog_info .title{
  font-size: 16px;
}

.blog_con .blog_info .info{
  font-size: 13px;
}
.blog_con .blog_info p{
  margin:10px 0 0;
}
.blog_con li{
  position: relative;
  cursor: pointer;
}
.blog_con li .imgMask{
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.blog_info .right_more{
  opacity: 0;
  display: block;
    width: 32px;
    height: 32px;
    transition: all 0.6s ease 0s;
    position: absolute;
    bottom: 20px;
    right: 0px;
    border: 0;
    padding: 0;
    line-height: 32px;
    left: auto;
    overflow: hidden;
}
.blog_info .right_more i{
  color:#7d7d7d;
  position: absolute;
    top: 0px;
    left: 0px;
    transition: all 0.36s ease 0s;
    font-size: 14px;
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
    margin-top: 40px;
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
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width:100%;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px; /* 设置一个最大宽度 */
}

.carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 1.5s ease;
}

.carousel-item {
  flex: 0 0 33.33%; /* 每个项目宽度占容器的 1/3 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.nav-button {
  background-color: rgba(0,0,0,0);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  z-index: 1;
  opacity: 0.7; /* 使按钮稍透明化 */
  transition: opacity 0.3s; /* 添加过渡效果 */
}

.nav-button-left {
  left: 10px; /* 调整使按钮进入轮播图容器内部 */
}

.nav-button-right {
  right: 10px; /* 调整使按钮进入轮播图容器内部 */
}

.nav-button i:hover{
  color: #EB740C;
  opacity: 1; /* 悬停时按钮完全不透明 */
}
</style>
