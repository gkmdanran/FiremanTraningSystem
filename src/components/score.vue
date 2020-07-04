<template>
  <div class="score">
   
      <div class="nav">
          团队编号：<span v-text="teamId"></span>
          团队人数：<span v-text="personNum+'人'"></span>
          综合评价：<span v-text="grade"></span>
          综合得分：<span v-text="score"></span>
      </div>
      <div class="box-card">
        <el-table
          stripe
          border
          :data="tableData"
          style="width: 100%"
          height="100%"
          >
          <el-table-column
            prop="itemNo"
            label="项目编号"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="itemName"
            label="项目名称"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="maxResult"
            label="最好成绩"
            show-overflow-tooltip>
             <template slot-scope="scope">{{scope.row.maxResult+' '+scope.row.unit}}</template>
          </el-table-column>
          <el-table-column
            prop="minResult"
            label="最差成绩"
            show-overflow-tooltip>
             <template slot-scope="scope">{{scope.row.minResult+' '+scope.row.unit}}</template>
          </el-table-column>
         
          <el-table-column
            prop="avgResult"
            label="平均成绩"
            show-overflow-tooltip>
            <template slot-scope="scope">{{scope.row.avgResult+' '+scope.row.unit}}</template>
          </el-table-column>
           
          <el-table-column
            prop="avgGrade"
            label="项目评价"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="avgScore"
            label="项目评分"
            show-overflow-tooltip>
          </el-table-column>
           
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
               <el-button type="primary" size="mini" icon="el-icon-search" @click="toDetail(teamId,scope.row.itemNo,scope.row.itemName)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
     username:'',
     teamId:'',
     personNum:'',
     score:'',
     grade:'',
     tableData:[]
    }
  },
  methods:{
    //获取团队分数
    getScore(){
      var username=sessionStorage.getItem('fUserName')
      var password=sessionStorage.getItem('fPassword')
      this.$http.get(`getTermItemResults?password=${password}&username=${username}`).then(res=> {
        // console.log(res)
        this.tableData=res.data.data.results
        this.teamId=res.data.data.deptId
        this.personNum=res.data.data.personNum
        this.score=res.data.data.avgPointInfoVo.score
        this.grade=res.data.data.avgPointInfoVo.grade
      })
    },
    //跳转详情
    toDetail(id,item,name){
      sessionStorage.setItem('fName',name)
      this.$router.push({
        path:"/detail",
        query:{
          deptId:id,
          itemNo:item
        }
      })
    }
  
  },
  created(){
    this.username=sessionStorage.getItem('fUserName')
    this.getScore()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .score {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    padding: 10px 20px;
  }

  .nav {
    width: 100%;
    height: 60px;
    /* background: pink; */
    line-height: 60px;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 2px solid #f1ba15;
    margin-bottom: 20px;
  }
  .nav span {
    margin-right: 30px;
    color: red;
  }
  .score .box-card {
    width: 100%;
    height: calc(100% - 100px);
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 3px -3px 10px 3px rgba(0,0,0,0.2);
    padding: 20px;
  }
</style>
<style >
.score .el-table td, 
.score .el-table th{
  padding: 8px 0;
}
</style>
