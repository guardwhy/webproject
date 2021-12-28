// 1.导入路由
import VueRouter from "vue-router"

// 导入组件
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";

// 2.导入Vue
import Vue from 'vue'

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews =  () => import('../components/HomeNews')
const HomeMessage =  () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 3.通过Vue.use(插件)，注入插件
Vue.use(VueRouter)

// 5.定义路由
const routes = [
  {
    path: '',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children:[
      // 重定向,默认路径
      /*{
        path: '',
        redirect: 'news'
      },*/
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

// 4.创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass: 'active'
})

// 前置守卫
router.beforeEach((to, from, next) =>{
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('----');
})

// 6.将router对象传入到vue实例中
export default router

