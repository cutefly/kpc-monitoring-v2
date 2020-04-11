import Vue from 'vue'
import Router from 'vue-router'

// Mnoitor
import Index from '@/components/MonitorIndexPage'
import View from '@/components/MonitorViewPage'
import Edit from '@/components/MonitorEditPage'
import Create from '@/components/MonitorCreatePage'

// Moonitor Group
import IndexMonitorGroup from '@/components/monitor-group/IndexPage'
import ViewMonitorGroup from '@/components/monitor-group/ViewPage'
import EditMonitorGroup from '@/components/monitor-group/EditPage'
import CreateMonitorGroup from '@/components/monitor-group/CreatePage'

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
      path: '/:seq/view',
      name: 'view',
      component: View
    },
    {
      path: '/:seq/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/monitor-group/',
      name: 'index-monitor-group',
      component: IndexMonitorGroup
    },
    {
      path: '/monitor-group/:seq/view',
      name: 'view-monitor-group',
      component: ViewMonitorGroup
    },
    {
      path: '/monitor-group/:seq/edit',
      name: 'edit-monitor-group',
      component: EditMonitorGroup
    },
    {
      path: '/monitor-group/create',
      name: 'create-monitor-group',
      component: CreateMonitorGroup
    }
  ]
})