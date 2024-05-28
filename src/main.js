/*
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-23 16:08:21
 * @LastEditors: Leim99 leiminwork@gmail.com
 * @LastEditTime: 2024-05-23 21:28:48
 * @FilePath: /my-blog/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import layout from "./layout";
import store from "./store";
import "./assets/css/global.scss";
import "swiper/css/swiper.css";
import "./assets/css/swiper.css";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font/icfont.css'
Vue.config.productionTip = false;
// 引入 Vconsole
import Vconsole from 'vconsole'

// 所有环境均使用
// new Vconsole()

// 在 test 环境才使用
process.env.NODE_ENV === 'development' ? new Vconsole : ''


Vue.use(ElementUI)
// Vue.use(layout);
Vue.use(store);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
