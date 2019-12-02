import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {path: '/tasks', name: 'Landing', component: () =>import('@/views/LandingView')},
    {path: '/', name: 'UserView', component: () => import(/* webpackChunkName: "landing" */ '@/views/UserView')},
]

export default new VueRouter({
    routes,
    mode: 'history'
})