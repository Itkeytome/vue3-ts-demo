import { createRouter, createWebHistory } from 'vue-router'
import ProgressView from '../views/progress/ProgressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProgressView
    }
  ]
})

export default router
