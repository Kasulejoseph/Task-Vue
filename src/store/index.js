import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/AuthModule'
import TaskModule from './modules/TaskModule'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules:{
        AuthModule,
        TaskModule
    }

});