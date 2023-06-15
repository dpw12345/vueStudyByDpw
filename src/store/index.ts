import Vue from 'vue'
import Vuex from 'vuex'
import OptionsStore from './modules/OptionsVuex'
import OptionsSlot from './modules/OptionsSlot'


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
    OptionsStore,
    OptionsSlot
  }
})
