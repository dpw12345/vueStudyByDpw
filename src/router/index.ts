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
    component: ()=> import('../views/Options.vue'),
  },
  {
    path: '/options/text',
    name: 'text',
    component: ()=> import('../views/Text.vue'),
  },
  {
    path: '/options/vueX',
    name: 'vueX',
    component: ()=> import('../views/OptionsVueX.vue'),
  },
  {
    path: '/options/introduction',
    name: 'introduction',
    component: ()=> import('../views/OptionsIntroduction.vue'),
  },
  {
    path: '/options/slot',
    name: 'slot',
    component: ()=> import('../views/OptionsSlot.vue'),
  },
  {
    path: '/options/v-model&sync',
    name: 'v-model&sync',
    component: ()=> import('../views/OptionsSync.vue'),
  },
  {
    path: '/options/virtual-scroller',
    name: 'virtual-scroller',
    component: ()=> import('../views/OptionsVirtual.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
