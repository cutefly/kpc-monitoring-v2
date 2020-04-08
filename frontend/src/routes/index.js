import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MonitorIndexPage'
import Show from '@/components/MonitorShowPage'
import Edit from '@/components/MonitorEditPage'
import Create from '@/components/MonitorCreatePage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/:seq',
      name: 'show',
      component: Show
    },
    {
      path: '/edit/:seq',
      name: 'edit',
      component: Edit
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    }
  ]
})