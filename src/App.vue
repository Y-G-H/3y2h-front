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
          <a-menu-item key="1">
            nav 1
          </a-menu-item>
          <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item>
        </a-menu>
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
</style>
