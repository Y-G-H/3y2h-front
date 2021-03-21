<template>
  <div id="app" style="width: 100%; height: 100%;">
    <div v-if="!$store.state.isLogin" style="width: 100%; height: 100%;">
      <router-view />
    </div>
    <a-layout id="layout-content" class="layout" v-if="$store.state.isLogin">
      <a-layout-header>
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item v-for="num in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]" :key="num">
            {{num}}
          </a-menu-item>
        </a-menu>

        <div class="avatar">
          <a-avatar style="backgroundColor:#87d068" icon="user" />
        </div>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        3y2h ©2021 Created by ygh,yzh,ylf,hk,hzj
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style>
#layout-content .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
#layout-content .avatar {
  float: right;
}
</style>
