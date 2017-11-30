import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import maps from '@/components/maps'
import map from '@/components/map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/maps',
      name: 'maps',
      component: maps
    },
    {
      path: '/map/:slug',
      name: 'map',
      component: map
    }
  ]
})
