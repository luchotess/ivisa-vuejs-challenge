import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/Step1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/step2.vue')
    }
  ]
})
