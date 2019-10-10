import axios from 'axios'

export default {
    state: {
        key: "From store",
        count: 0,
        tasks: [],
        user: {
            signup: {},
            login: {}
        },
        error: {},
        loading: false,
        showsnack: {
            color: '',
            snackbar: false
        }
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks
        },
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
        }

    },
    actions: {
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
            axios.post(`${process.env.VUE_APP_BASE_URL}/users/login`, data)
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
        GET_TASKS_ACTION: ({commit}) => {
            const token = sessionStorage.getItem('auth-token')
            return axios.get(`${process.env.VUE_APP_BASE_URL}/task`,
                {
                    headers: {
                  authorization: token,
                  'content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then((response) => {                
                commit('SET_TASKS', response.data)
            })
            .catch((error) => {                
                commit('HANDLE_ERROR',error.response)
            })
        }
    },
    getters: { 
        GET_TASKS(state) {
            return state
        },
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