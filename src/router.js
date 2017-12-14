import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('./pages/main.vue')
const Map = () => import('./pages/map.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Main, name: 'home' },
        { path: '/details/:id', component: Main, name: 'details' },
        { path: '/map', component: Map, name: 'map' }
    ]
})

export default router
