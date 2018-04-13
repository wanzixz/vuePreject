// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'whatwg-fetch'
import FastClick from 'fastclick'
import router from './router'
import Promise from 'promise-polyfill'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)

FastClick.attach(document.body)

Vue.config.productionTip = false

if (!window.Promise) {
  window.Promise = Promise
}

Vue.use(VueRouter)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/') {
    next()
  } else {
    console.log(12345, store.state.user)
    if (!store.state.user) {
      next({path: '/'})
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
