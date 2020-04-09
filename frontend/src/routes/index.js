import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MonitorIndexPage'
import Show from '@/components/MonitorShowPage'
import Edit from '@/components/MonitorEditPage'
import Create from '@/components/MonitorCreatePage'
import IndexMonitorGroup from '@/components/monitor-group/IndexPage'

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
      path: '/view/:seq',
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
    },
    {
      path: '/monitor-group',
      children: [
        {
          path: '/',
          name: 'indexMonitorGroup',
          component: IndexMonitorGroup
        },
        {
          path: '/:seq',
          name: 'showMonitorGroup',
          component: Show
        },
        {
          path: '/edit/:seq',
          name: 'editMonitorGroup',
          component: Edit
        },
        {
          path: '/create',
          name: 'createMonitorGroup',
          component: Create
        }              ]
    }
  ]
})