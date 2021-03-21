import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/Index';
import login from '@/page/Login';
import unauthorized from '@/page/unauthorized';

Vue.use(Router)

export default new Router({
  base: '',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: unauthorized,
    },
  ]
})
