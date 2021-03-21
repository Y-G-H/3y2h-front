<template>
  <div class="exception">
    <img :src="img"/>
    <p>
      很抱歉，您没有当前页面访问权限...
    </p>
    <p>
      可能原因： 网址有错误&gt;未开通菜单权限等
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: 'https://sitecdn.zcycdn.com/f2e-assets/30e125df-d7cd-497c-996a-da61eb9b44f9.svg',
    };
  },
  mounted() {
    if (!this.$store.state.isLogin) {
      const redirect = this.$route.query.redirect;
      this.$router.push(`/login?redirect=${encodeURIComponent(redirect)}`);
    }
  },
};
</script>

<style scoped>
  .icon {
    font-size: 300px;
  }
  .exception {
    margin-top: 100px;
    text-align: center;
  }
  .exception img {
    width: 440px;
  }
  .exception title {
    color: #606060;
    font-size: 30px;
  }
</style>
