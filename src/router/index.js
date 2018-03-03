import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
     routes: [
    {
      path: '/',
      // require 引入组件
      component: require('@/page/music/Index.vue')
    },
    {
      path: '/index',
      // require 引入组件
      component: require('@/page/music/Index.vue')
    },
    {
      path: '/music',
      // require 引入组件
      component: require('@/components/IndexPublic.vue'),
      meta: {
          title: 'search',
          keepAlive: true
        },
      children: [
        {
          path: '/music/search',
          name: 'search',
          component: require('@/page/music/Search.vue')
        
        }
      ]
    },
    {
      path: '/user',
      // require 引入组件
      component: require('@/components/IndexPublic.vue'),
      children: [
        {
          path: '/user',
          component: require('@/page/user/Index.vue')
        }
      ]
    },
    {
      path: '/music/musiclist/:id',
      name: 'musiclist',
      component: require('@/page/music/Musiclist.vue')
    }
  ],
 scrollBehavior (to, from, savedPosition) {
     if (savedPosition) { //如果savedPosition存在，滚动条会自动跳到记录的值的地方
      //  console.log('savedPosition:'+ savedPosition)
       return savedPosition
     } else {
      //  console.log('savedPosition'=savedPosition)
       return { x: 10, y: 10 }//savedPosition也是一个记录x轴和y轴位置的对象
       
      }
     }
})
// 路由钩子函数，在每次路由切换时执行
router.beforeEach((to, from, next) => {
  let routerNum = 0
  if(localStorage.getItem('routerNum')){
    routerNum = localStorage.getItem('routerNum')
  }
  localStorage.setItem('routerNum', ++routerNum)
  console.log('路由跳转第：' + routerNum + '次')
  next()
})

   
export default router
