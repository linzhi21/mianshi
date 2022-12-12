import Life from '@/pages/01-Life'
import Life1 from '@/pages/01-Life/Life1'
import Life2 from '@/pages/01-Life/Life2'

import Comp from '@/pages/02-Comp'
import DynamicCacheAsync from '@/pages/02-Comp/DynamicCacheAsync'
import FunctionalComp from '@/pages/02-Comp/FunctionalComp'
import RecurseComp from '@/pages/02-Comp/RecurseComp'

export default [


  {
    path: '/test',
    component: () => import('../pages/Test.vue')
  },
  
  {
    path: '/life',
    component: Life,
    children: [
      {
        path: 'life1',
        component: Life1,
      },
      {
        path: 'life2',
        component: Life2
      },
    ]
  },
  {
    path: '/comp',
    component: Comp,
    children: [
      {
        path: 'dca',
        component: DynamicCacheAsync,
        
      },
      {
        path: 'functional',
        component: FunctionalComp
      },
      {
        path: 'recurse',
        component: RecurseComp
      },
    ]
  },

	{
    path: '/communication',
    component: () => import('@/pages/03-Communication'),
    children: [
      {
        path: 'props',
        component: () => import('@/pages/03-Communication/01_props/PropsTest.vue'),
      },
      {
        path: 'event',
        component: () => import('@/pages/03-Communication/02_custom-event/EventTest'),
      },
      {
        path: 'bus',
        component: () => import('@/pages/03-Communication/03_event-bus/EventBusTest'),
      },
      {
        path: 'model',
        component: () => import('@/pages/03-Communication/04_v-model/ModelTest'),
      },
      {
        path: 'sync',
        component: () => import('@/pages/03-Communication/05_sync/SyncTest'),
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/03-Communication/06_attrs-listeners/AttrsListenersTest'),
      },
      {
        path: 'ref-children-parent',
        component: () => import('@/pages/03-Communication/07_ref-children-parent/RefChildrenParentTest'),
      },
      {
        path: 'provide-inject',
        component: () => import('@/pages/03-Communication/08_provide-inject/ProvideInjectTest'),
      },
      {
        path: 'vuex',
        component: () => import('@/pages/03-Communication/09_vuex/VuexTest'),
      },
      {
        path: 'slot',
        component: () => import('@/pages/03-Communication/10_slot/SlotTest'),
      },
    ],
  },

  {
    path: '/reactive',
    component: () => import('@/pages/04-Reactive'),
  },

  {
    path: '/reuse',
    component: () => import('@/pages/05-Reuse'),
  },
  {
    path: '/vuex',
    component: () => import('@/pages/06-Vuex'),
    children: [
      {
        path: 'shopcart',
        component: () => import('@/pages/06-Vuex/ShopCart'),
      },
      {
        path: 'personal',
        component: () => import('@/pages/06-Vuex/Personal'),
      }
    ]
  },
  {
    path: '/router',
    component: () => import('@/pages/07-Router'),
  },
]