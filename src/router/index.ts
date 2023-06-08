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
    path: '/exercise',
    name: 'exercise',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercise.vue')
  },
  {
    path:'/exercise/one',
    component:() => import('../components/Exercise/ExerciseOne.vue')
  },
  {
    path:'/exercise/slot',
    component:() => import('../views/ExerciseSlot.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
