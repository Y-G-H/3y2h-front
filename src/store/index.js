import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const index = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    RefreshToken: localStorage.getItem('RefreshToken') ? localStorage.getItem('RefreshToken') : '',
    isLogin: localStorage.getItem('Authorization') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isSuperAdmin: localStorage.getItem('isSuperAdmin') ? JSON.parse(localStorage.getItem('isSuperAdmin')) : false,
    permission: localStorage.getItem('permission') ? JSON.parse(localStorage.getItem('permission')) : [],
    hasUrls: localStorage.getItem('hasUrls') ? JSON.parse(localStorage.getItem('hasUrls')) : [],
    menus: localStorage.getItem('menus') ? JSON.parse(localStorage.getItem('menus')) : [],
  },
  mutations: {
    // 修改token，并将token存入localStorage
    // loginState (state, user) {
    //   state.Authorization = user.Authorization;
    //   localStorage.setItem('Authorization', user.Authorization);
    // },
  },
});

export default index;
