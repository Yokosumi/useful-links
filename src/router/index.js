import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GeneratorsView from '../views/GeneratorsView.vue'
import AboutView from '../views/AboutView.vue'
import IconsView from '../views/IconsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/generators',
      name: 'generators',
      component: GeneratorsView
    },
    {
      path: '/icons',
      name: 'icons',
      component: IconsView
    }
  ]
})

export default router
