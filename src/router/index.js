import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import xiangmu from '@/components/xiangmu'
import data from '@/components/data'
import me from '@/components/me'
//资料视图
import es6 from '@/components/es6'
import mintUI from '@/components/mintUI'
import vueOffical from '@/components/vueOffical'
import webpack from '@/components/webpack'
import property from '@/components/property'
import node from '@/components/node'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/xiangmu',
      name: 'xiangmu',
      component: xiangmu
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
//  资料视图
    {
      path: '/es6',
      name: 'es6',
      component: es6
    },
    {
      path: '/mintUI',
      name: 'mintUI',
      component: mintUI
    },
    {
      path: '/vueOffical',
      name: 'vueOffical',
      component: vueOffical
    },
    {
      path: '/webpack',
      name: 'webpack',
      component: webpack
    },
    {
      path: '/property',
      name: 'property',
      component: property
    },
    {
      path: '/node',
      name: 'node',
      component: node
    }
  ]
})
