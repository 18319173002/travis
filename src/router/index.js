import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Sport from '../pages/Sport'
import Travel from '../pages/Travel'
import User from '../pages/User'
import UserInfo from '../pages/UserInfo'
import UserLogin from '../pages/UserLogin'
import UserRegist from '../pages/UserRegist'
import UserSet from '../pages/UserSet'
import UserPost from '../pages/UserPost'
import UserMsg from '../pages/UserMsg'
import Detail from '../pages/Detail'
import UserNavbar from '../pages/UserNavbar'
import NotFound from '../pages/NotFound'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path:'/home',
      name:'home',
      component:Home

    },
    {
      path:'/sport',
      name:'sport',
      component:Sport
    },
    {
      path:'/sport:id',
      component:Detail
    },
    {
      path:'/travel',
      name:'travel',
      component:Travel
    },
    {
      path:'/travel:id',
      component:Detail
    },
    {
      path:'/user',
      name:'user',
      component:User,
      children:[
        {
          path:'login',
          component:UserLogin
        },
        {
          path:'info',
          component:UserInfo
        },
        {
          path:'regist',
          component:UserRegist
        },
        {
          path:'msg',
          component:UserMsg
        },
        {
          path:'navbar',
          component:UserNavbar
        },
        {
          path:'set',
          component:UserSet
        },
        {
          path:'post',
          component:UserPost
        }

      ]
    },
    {
      path:'*',
      name:'notfound',
      component:NotFound,
    }
  ]
})
