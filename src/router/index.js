import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/:route',
        name: 'MatchAll',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router