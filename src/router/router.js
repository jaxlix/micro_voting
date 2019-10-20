import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index/index')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/index/search')
    },
    {
      path: '/voting',
      name: 'voting',
      component: () => import('../views/voting/index')
    },
    {
      path: '/votingDetail',
      name: 'votingDetail',
      component: () => import('../views/voting/detail')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/mine/index')
    }
  ]
})
