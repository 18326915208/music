import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/music'
import Exp from '@/components/exp'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Music',
      component: Music
    },
    {
      path: '/exp',
      name: 'Exp',
      component: Exp
    }
  ]
})
