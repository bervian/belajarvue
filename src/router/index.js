import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import About from '../About.vue'
import Porto from '../porto.vue'
import Photo from '../photo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/porto',
        name: 'Porto',
        component: Porto
    },
    {
        path: '/photo',
        name: 'Photo',
        component: Photo

    }]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router