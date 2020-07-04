<template>
  <div class="homepage">
    <div class="top">
     <div class="title">消防体质训练系统</div>
    
     <div class="info">
       <span>{{username}}</span>
       <button @click="logOut()">退出登录</button>
     </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      username:''
    }
  },
  methods:{
    //退出登录
     logOut(){
      sessionStorage.setItem('fUserName','')
      sessionStorage.setItem('fPassword','')
      this.$router.push({
        path:"/"
      })
      this.$message({
              message: '退出成功',
              type: 'success',
              duration:800
            });
    },
   
  },
  created(){
    this.username=sessionStorage.getItem('fUserName')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage {
  width: 100%;
  height: 100%;
}
  .top {
    width: 100%;
    height: 62px;
    background: #c92615;
    border-bottom: 5px solid #f1ba15;
    padding: 0 40px;
  }
  .title {
    float: left;
    width: 50%;
    height: 100%;
    line-height: 60px;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 5px;
    color: yellow;
  }
  .info {
    text-align: right;
    float: right;
    width: 50%;
    height: 100%;
    line-height: 60px;
  }
  .info span{
    font-size: 18px;
    color: #ffffff;
  }
  .info button{
    outline: none;
    border: 0;
    width: 80px;
    height: 40px;
    vertical-align: middle;
    margin-top: -5px;
    border-radius: 15px;
    margin-left: 20px;
    cursor: pointer;
    background: #f1ba15;
    color: red;
    font-size: 14px;
    font-weight: 700;
  }
    .content {
    width: 100%;
    height: calc(100% - 62px);
    
  }
</style>
