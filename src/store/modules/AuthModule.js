import axios from 'axios'

export default {
    state: {
        user: {
            signup: {},
            login: {}
        },
        error: {},
        loading: false,
        avatar: {
            image: '',
            error: ''
        },
        showsnack: {
            color: '',
            snackbar: false
        }
    },
    mutations: {
        SIGNUP_USER(state, user) {
            state.user.signup = user
        },
        LOGIN_USER(state, user) {
            state.user.login = user
        },
        HANDLE_ERROR(state, error) {
            state.error = error
        },
        UPDATE_LOADER(state, loader){
            state.loading = loader
        },
        SHOW_SNACKBAR(state, payload){
            state.showsnack = payload 
        },
        UPDATE_AVATAR(state, error){
            state.avatar.error = error
        }


    },
    actions: {
        AVATAR_ACTION: ({commit}) => {
            commit('UPDATE_AVATAR', '')
            axios.get(`${process.env.VUE_APP_BASE_URL}/users/${sessionStorage.getItem('auth-id')}/avatar`)
            .then(() => {                
            })
            .catch((error)=> {                
                commit('UPDATE_AVATAR', error.response.data)
            })
        },
        SIGNUP_ACTION: ({commit}, data) => { 
            commit('UPDATE_LOADER', true)          
            axios.post(`${process.env.VUE_APP_BASE_URL}/users`, data)
            .then((response) => {
                const { token } = response.data                
                sessionStorage.setItem('auth-token', token)
                commit('SIGNUP_USER', response.data)
                commit('UPDATE_LOADER', false)
                
            })
            .catch((error) => {
                commit('HANDLE_ERROR', error.response.data)
                commit('UPDATE_LOADER', false)
            })
        },
        LOGIN_ACTION: ({commit}, data) => { 
            commit('UPDATE_LOADER', true) 
            commit('LOGIN_USER', '')   
            commit('HANDLE_ERROR', '')       
            axios.post(`http://127.0.0.1:8000/users/login`, data)
            .then((response) => {
                const { token } = response.data
                const { _id:userId } = response.data.data              
                sessionStorage.setItem('auth-token', token);
                sessionStorage.setItem('auth-id', userId);
                commit('LOGIN_USER', response.data)
                
                commit('SHOW_SNACKBAR', {
                    color: 'success',
                    snackbar: true
                })                
                commit('UPDATE_LOADER', false)
            })
            .catch((error) => {
                commit('HANDLE_ERROR', error.response.data)                
                commit('UPDATE_LOADER', false)
                commit('SHOW_SNACKBAR', {
                    color: 'error',
                    snackbar: true
                })  
            })
        },
    },
    getters: { 
        GET_USER(state){
            return state.user
        },
        GET_ERROR(state) {
            return state.error
        },
        GET_LOADER(state) {
            return state.loading
        },
        GET_SNACK(state){
            return state.showsnack
        }
    }
}