import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/form'
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/form/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
