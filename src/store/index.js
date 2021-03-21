import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const index = new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('user') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    hasUrls: localStorage.getItem('hasUrls') ? JSON.parse(localStorage.getItem('hasUrls')) : [],
    menus: localStorage.getItem('menus') ? JSON.parse(localStorage.getItem('menus')) : [],
  },
  mutations: {
    loginState (state, user) {
      state.user = user;
      state.isLogin = true;
      localStorage.setItem('hasUrls', JSON.stringify(['/']));
      localStorage.setItem('user', JSON.stringify(user));
    },
  },
});

export default index;
