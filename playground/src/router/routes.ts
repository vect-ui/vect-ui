import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    name: 'day-xue',
    path: '/day-xue',
    component: () => import('../pages/day-xue.vue')
  },
  {
    name: 'hai-jie',
    path: '/hai-jie',
    component: () => import('../pages/hai-jie.vue')
  },
  {
    name: 'din',
    path: '/din',
    component: () => import('../pages/din.vue')
  }
]

export default routes
