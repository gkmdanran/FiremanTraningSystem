import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const pclogin=()=>import('../components/pclogin')
const score=()=>import('../components/score')
const homepage=()=>import('../components/homepage')
const detail=()=>import('../components/detail')
const notfound=()=>import('../components/notfond')
const router= new Router({
  routes: [
    
    {
      path: '/',
      name: 'pclogin',
      component:pclogin
    },
    {
      path: '/homepage',
      name: ' homepage',
      component:homepage,
      redirect:'/score',
      children:[
        {
          path: '/score',
          name: 'score',
          component:score,
        },
        {
          path: '/detail',
          name: 'detail',
          component:detail,
        }
      ]
    },
    {
      path:"/notfound",
      name: 'notfound',
      component:notfound
    },
    {
      path:"*",
      redirect:'/notfound'
    },
  ],
  mode:'history'
})

router.beforeEach((to,from,next)=>{
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next()直接放行 next('/login)强制跳转到login
  if(to.path=="/")return next();
  var username=sessionStorage.getItem('fUserName')
  var password=sessionStorage.getItem('fPassword')
  if(!username||!password) return next("/")
  next()
})
export default router