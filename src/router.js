import Vue from 'vue'
import Router from 'vue-router'
import * as pages from './views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      name: 'orginization_portrait',
      path: '/orginizationPortrait',
      component: pages.orginization_portrait,
    },
  ],
})
