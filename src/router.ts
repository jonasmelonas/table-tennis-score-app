import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('./components/ModeSelect.vue') },
  { path: '/single', name: 'PlayerSingle', component: () => import('./components/PlayerSelectSingle.vue') },
  { path: '/match', name: 'PlayerMatch', component: () => import('./components/PlayerMatch.vue') },
  // add more routes (tournament, scoreboard, etc.)
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router