import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '../components/user/User'
import Wallpaper from  '../components/user/Wallpaper'
import Article from  '../components/user/Article'
import Detail from '../components/user/Detail'
import Download from '../components/user/Download'
import Up from '../components/user/Up'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/wallpaper',
      name: 'home',
      component: Wallpaper
    },
    {
      path: '/up',
      name: 'home',
      component: Up
    },
    {
      path: '/article',
      name: 'home',
      component: Article
    },
    {
      path: '/download',
      name: 'home',
      component: Download
    },
    {
      path: '/article/detail/:shopId.html',
      name: 'home',
      component: Detail
    },
    {
      path: '/download/detail/:shopId.html',
      name: 'home',
      component: Detail
    }
    ,
    {
      path: '/:userId',
      name: 'home',
      component: User,
      children:[
        {
          path: 'wallpaper',
          name:'detail  ',
          component: Wallpaper
        },
        {
          path: 'article',
          name:'detail',
          component: Article
        },
        {
          path: 'download',
          name: 'detail',
          component: Download
        }
      ]
    },

  ]
})
