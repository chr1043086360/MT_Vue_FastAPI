<template>
  <div id="b">
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />

    <button type="button" @click="login">登录</button>
    {{ resp }}
  </div>
</template>

<script>
export default {
  name: "pageB",

  methods: {
    login: function() {
      // 异步发送请求, 后端需要配置信息
      this.axios
        .post("http://127.0.0.1:8000/api/v1/user/register", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.resp = response.data.data;
        });
    }
  },
  data() {
    return {
      resp: [],
      username: "",
      password: ""
    };
  }
};
</script>

<style></style>
