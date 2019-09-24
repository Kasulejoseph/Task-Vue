import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '@/views/LandingView'
Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'Landing', component: LandingView},
]

export default new VueRouter({
    routes,
    mode: 'history'
})