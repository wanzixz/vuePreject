import Vue from 'vue'
import Router from 'vue-router'

import Vb from '../components/B.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => {
        require(['../components/HelloWorld.vue'], resolve)
      },
      meta: {
        title: '用户登陆'
      }
    },
    {
      path: '/test/:id',
      name: 'Test',
      component: (resolve) => {
        require(['../components/Test.vue'], resolve)
      },
      props: {default: true},
      children: [{
        path: 'a',
        name: 'a',
        alias: 'c',
        component: (resolve) => {
          require(['../components/A.vue'], resolve)
        },
        meta: {
          title: '测试a'
        }
      },
      {
        path: 'b',
        name: 'b',
        components: {
          bname: Vb
        }
      }]
    },
    {
      path: '*',
      component: (resolve) => {
        require(['../components/notFound.vue'], resolve)
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
