import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Diensten from '../views/Diensten.vue'
import Partners from '../views/Partners.vue'
import Contact from '../views/Contact.vue'
import Over from '../views/Over.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/diensten',
        name: 'Diensten',
        component: Diensten
    },
    // {
    //     path: '/diensten/:id',
    //     name: 'Home',
    //     component: Dienst
    // },
    {
        path: '/partners',
        name: 'Partners',
        component: Partners
    },
    {
        path: '/over',
        name: 'Over ons',
        component: Over
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
