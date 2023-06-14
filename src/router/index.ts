import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/options',
    name: 'options',
    component: ()=> import('../views/Options.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
