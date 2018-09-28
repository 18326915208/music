import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/music'
import Login from '@/components/login'
import Index from '@/components/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Music',
      component: Music
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
