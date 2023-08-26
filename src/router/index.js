import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ShopView from '../views/ShopView.vue'
import CommandsView from '../views/CommandsView.vue'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/shop',
        name: 'Shop',
        component: ShopView
    },
    {
        path: '/commands',
        name: 'Commands',
        component: CommandsView
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