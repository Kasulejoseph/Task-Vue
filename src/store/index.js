import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/AuthModule'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules:{
        AuthModule
    }

});