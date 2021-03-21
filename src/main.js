// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies';
import Antd from 'ant-design-vue';
import { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "./store";
import blackList from './router/blackList'

Vue.use(VueCookies);
Vue.use(Antd);
Vue.config.productionTip = false

Vue.prototype.$message = message;

// 路由跳转钩子
router.beforeEach((to, from, next) => {
  // 黑名单则需要鉴权
  if (blackList.indexOf(to.path) >= 0 && store.state.hasUrls.indexOf(to.path) < 0) {
    next(`/unauthorized?redirect=${encodeURIComponent(window.location.origin + to.path)}`);
    return;
  }
  // 鉴权通过
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
