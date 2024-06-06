/*
 * @Author: Leim99 leiminwork@gmail.com
 * @Date: 2024-04-27 16:02:57
 * @LastEditors: leimin99 leimimwork@gmail.com
 * @LastEditTime: 2024-06-06 14:02:52
 * @FilePath: /my-blog/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: '/index', //首页
    name: 'index',
    component: () =>
      import( "../views/main/index.vue"),
  },
  {
    path: '/desc', //封面
    name: 'desc',
    component: () =>
      import( "../views/desc/index.vue"),
  },
  {
    path: '/production', //我的作品
    name: 'production',
    component: () =>
      import("src/views/my-production/index.vue"),
  },
  {
    path: '/blog', //boke 
    name: 'blog',
    component: () =>
      import("../views/blog/index.vue"),
  },
  {
    path: '/productionDetail/:id', //作品详情
    name: 'productionDetail',
    component: () =>
      import("../views/my-production/production.vue"),
  },
  {
    path: '/mobilepage', //mobile page
    name: 'mobilepage',
    component: () =>
      import("../views/desc/mobilepage.vue"),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   next()
// })
export default router;
