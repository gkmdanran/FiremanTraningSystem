<template>
  <div class="pclogin">
      <div class="logotxt">LOGO</div>
      <div class="contents">
        <div class="left">
          <div class="title">消防体质训练系统</div>
          <div class="eng">
            FIREMAN PHYSICAL TRAINING SYSTEM
          </div>
        </div>
        <div class="right">
          <div class="login_infos">
            <div class="welcome">
              欢迎登陆
            </div>
            <div class="names">
             消防体质训练系统
            </div>
            <i class="el-icon-s-custom"></i>              
            <input type="text"  class="us" placeholder="用户账号" v-model.trim="username">
            <i class="el-icon-lock"></i> 
            <input type="password"  class="us" placeholder="登陆密码" v-model="password" @keyup.enter="loginSystem()">
            <div class="foots">
              <input type="checkbox" class="checks" v-model="isautologin">
              记住密码
               <button @click="loginSystem()">登录</button>
            </div>
          </div>
          <div class="forget">忘记密码?寻求帮助</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'pclogin',
  data () {
    return {
      username:'',
      password:'',
      isautologin:false
    }
  },
  methods:{
    //登录
    loginSystem(){
      if(this.username.trim()!==''&&this.password.trim()!==''){
        this.$http.get(`getTermItemResults?password=${this.password}&username=${this.username}`).then(res=> {
          // console.log(res)
          if(res.data.code!==200)
            return this.$message({
              message: '密码错误或账号不存在',
              type: 'warning',
              duration:1000
            });
          sessionStorage.setItem('fUserName',this.username)
          sessionStorage.setItem('fPassword',this.password)
          this.$message({
              message: '登录成功',
              type: 'success',
              duration:800
            });
          this.$router.push({
            path:'/homepage'
          })
        })
      }
     
    },
  },
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pclogin {
  width: 100%;
  height: 100%;
  background: url("../assets/xfbg.jpg") no-repeat;
  background-size:100% 100%;
  position: relative;
  min-height: 700px;
  min-width: 1280px;
}
.logotxt {
  color: #ffffff;
  font-size: 25px;
  position: absolute;
  top: 3%;
  left: 3.5%;
}
.contents {
  position: absolute;
  width: 66.67%;
  height: 49.15%;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.3) ;
  border-radius: 10px;
}
.contents .left{
  float: left;
  height: 100%;
  width: 63.7%;
  background: rgba(0,0,0,0.1);
  padding-top: 10%;
  padding-left: 4.7%;
}
.contents .right {
  float: left;
  height: 100%;
  width: 36.3%;
  background: #bc4027;
}
.left .title {
  height: 50px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  
}
.left .eng {
  font-size: 12px;
  color: #ffffff;
}
.right .login_infos {
  width: 74.6%;
  margin: 0 auto;

  padding-top: 17.2%;
  height: 87%;
}
.right .forget {
  width: 100%;
  height: 13%;
  background: #f4f4f4;
  color: #788190;
  font-size: 9.6px;
  text-align: center;
  line-height: 45px;
}
.right .welcome {
  font-size: 18px;
  color: #000000;
  height: 40px;
}
.right .names {
  font-size: 14px;
  color: #ffffff;
  height: 20px;
}

.right .us{
  width: 100%;
  height: 15%;
  border-radius: 3px;
  outline: none;
  border: 0;
  background-color: #f4f4f4;
  padding-left: 40px;
}
.foots {
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 11px;
  color: #2d3b53;
  margin-top: 8%;
}
.foots .checks {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #cccccc;
  margin-bottom: 0;
  margin-top: -2px;
  vertical-align: middle;
}
.foots button {
  float: right;
  vertical-align: middle;
  height: 35px;
  width:40%;
  border-radius: 3px;
  border: 0;
  outline: 0;
  background-color: #a92b16;
  color: #ffffff;
  cursor: pointer;
}

</style>
<style>
  .pclogin .el-icon-s-custom,
  .pclogin .el-icon-lock {
    position: relative;
    top: 29px;
    color: #28374f;
    left: 10px;
  }
</style>
