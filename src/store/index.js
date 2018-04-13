import Vue from 'vue'
import Vuex from 'vuex'

import dialogStore from './dialog_store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    // 登录
    login (state, user) {
      console.log(123, state)
      state.user = user
      console.log(456, state)
    },
    // 退出
    logout (state, user) {
      state.user = false
    }
  },
  modules: {
    dialog: dialogStore
  }
})
