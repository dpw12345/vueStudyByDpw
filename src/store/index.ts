import Vue from 'vue'
import Vuex from 'vuex'
import exercise from './modules/exercise'
import exercise2 from './modules/exercise2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    exercise,
    exercise2,
  }
})
