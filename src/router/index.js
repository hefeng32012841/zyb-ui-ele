import Vue from 'vue'
// import RouterMap from './map.js'
import Router from 'vue-router'
import Index from '@/components/Index'
import zybColor from '@/components/zybColor/zybColor.vue'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/zybColor',
      name: 'zybColor',
      component: zybColor
    }
  ]
})
