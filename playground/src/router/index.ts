import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const router: Router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
