import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/routerTab/index'
import ACompontent from '@/components/routerTab/A'
import BCompontent from '@/components/routerTab/B'
import CCompontent from '@/components/routerTab/C'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: 'aaa',
          component: ACompontent
        },
        {
          path: 'bbb',
          component: BCompontent
        },
        {
          path: 'ccc',
          component: CCompontent
        }
      ]
    }
  ]
})
