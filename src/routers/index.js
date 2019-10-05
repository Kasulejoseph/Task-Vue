import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '@/views/LandingView'
import UserView from '@/views/UserView'
Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'Landing', component: LandingView},
    {path: '/user', name: 'UserView', component: UserView},
]

export default new VueRouter({
    routes,
    mode: 'history'
})