import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Planner from '../views/Planner.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/planner',
        name: 'Planner',
        component: Planner
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router