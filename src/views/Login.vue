<template>
  <div>
    <div id="login-background">
      <div class="login-box">
        <input
          class="account"
          type="text"
          placeholder="请输入账号"
          v-model="account"
          @input="addAccount()"
        />
        <input
          class="password"
          type="text"
          placeholder="请输入密码"
          v-model="password"
          @input="addPassword()"
        />
        <el-button class="login" type="primary" round @click.enter="login()"
          >登陆</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "dpw",
      password: "handsome",
      accountBook: [
        {
          account: "dpw",
          password: "handsome",
        },
        {
          account: "xjf",
          password: "handsome",
        },
      ],
    };
  },
  methods: {
    addAccount() {},
    addPassword() {},
    login() {
      let index = this.accountBook.findIndex((v) => v.account === this.account);
      if (index !== -1) {
        let matchPassword = this.accountBook[index].password;
        if (matchPassword === this.password) {
          console.log("login");
          this.$router.push({
            name:'exercise',
            params:{
              name:123
            }
          })
        }
      } else {
        alert("please add true account && password");
      }
    },
  },
};
</script>
<style scoped lang="less">
#login-background {
  height: calc(70vh);
  // filter: blur(200px);
  // overflow: hidden;
  .login-box {
    display: table;
    margin: 200px auto;
    input {
      border-radius: 999px;
      padding-left: 20px;
      font-size: 24px;
    }
    .account {
      display: block;
      width: 300px;
      height: 40px;
    }
    .password {
      display: block;
      width: 300px;
      height: 40px;
      margin: 50px 0 50px 0;
    }
    .login {
      display: block;
      margin: auto;
      width: 100px;
      height: 40px;
    }
  }
}
</style>
