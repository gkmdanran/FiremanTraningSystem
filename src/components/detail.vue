<template>
  <div class="detail">
     <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/score' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item >成绩详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>{{itemName+' 详情成绩个人排行'}}</h2>
    <div class="box-card">
      <el-table
        stripe
        border
        :data="tableData"
        style="width: 100%"
        height="100%"
        >
        <el-table-column
          prop="rank"
          label="成绩排名"
          show-overflow-tooltip>
        </el-table-column>
        
        <el-table-column
          prop="userName"
          label="用户"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="itemNo"
          label="项目编号"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="成绩"
          show-overflow-tooltip>
          <template slot-scope="scope">
            {{scope.row.result+' '+scope.row.unit}}
          </template>
        </el-table-column>
        <el-table-column
          prop="grade"
          label="评价"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="score"
          label="得分"
          show-overflow-tooltip>
        </el-table-column>
        
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      itemName:'',
      tableData:[]
    }
  },
  methods:{
    //获取详情
    getDetail(){
      this.$http.get(`getTermResultsByItem?deptId=${this.$route.query.deptId}&itemNo=${this.$route.query.itemNo}`).then(res=>{
        // console.log(res.data)
        this.tableData=res.data.data
      })
    },
  },
  
  created(){
    this.itemName=sessionStorage.getItem('fName')
    this.getDetail()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .detail {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    padding: 20px;
  }
  h2 {
    margin-top: 20px;
    color: red;
    text-align: center;
  }
</style>
<style>
  .detail .el-breadcrumb {
    margin-left: 10px;
    font-size: 20px;
  }
  .box-card {
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 90px);
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 3px -3px 10px 3px rgba(0,0,0,0.2);
    padding: 20px;
  }
</style>
