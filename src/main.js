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

Vue.use(Antd);
Vue.config.productionTip = false

Vue.prototype.$message = message;
Vue.prototype.$cookies = VueCookies;

// 路由跳转钩子
router.beforeEach((to, from, next) => {
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app');
