<template>
  <a-form class="login" :form="form">
    <div class="title">
      <span>欢迎来到 3y2h 的美妙世界！</span>
    </div>
    <div>
      <a-form-item>
        <a-input
          type="text"
          placeholder="用户名"
          v-decorator="['username',{ rules: [{ required: true, message: '用户为空！' }]}]"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item>
        <a-input
          type="password"
          placeholder="密码"
          v-decorator="['password',{ rules: [{ required: true, message: '密码为空！' }]}]"
        />
      </a-form-item>
    </div>
    <div>
      <a-button type="primary" @click="login" :loading="loading">登录</a-button>
    </div>
  </a-form>
</template>

<script>
import { login } from './api';
import base64 from "../utils/base64";
import { mapMutations } from 'vuex';

export default {
  data () {
    return {
      form: this.$form.createForm(this, { name: 'login_form' }),
      loading: false,
      redirect: undefined,
    };
  },
  mounted() {
    this.redirect = this.$route.query.redirect;
  },
  methods: {
    ...mapMutations(['loginState']),
    login() {
      this.form.validateFields((err, values) => {
        if (!err) {
          values.password = base64.encode(values.password);
          console.log(values);
          login(values).then(res => {
            if (res.success) {
              this.$message.success('登录成功！');
              this.loginState(res.data);
              if (this.redirect) {
                let ori = window.location.origin;
                let redirect = this.redirect.replace(ori, '');
                this.$router.push(redirect);
              } else {
                this.$router.push('/');
              }
            } else {
              this.$message.error(res.message);
            }
          })
        }
      },);
    },
  }
};
</script>

<style scoped>
.login {
  width: 420px;
  margin: 0 auto;
  position: relative;
  top: 20%;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
  padding: 25px;
}

.login .title {
  font-weight: bold;
  font-size: 20px;
}

.login div {
  margin-bottom: 20px;
}

.login input, .login button {
  width: 100% !important;
  line-height: 40px;
  height: 40px;
}

.login input::-webkit-input-placeholder,  .login button {
  font-size: 16px;
}
</style>
