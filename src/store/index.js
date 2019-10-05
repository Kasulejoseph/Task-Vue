import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        key: "From store",
        count: 0,
        tasks: [],
        user: {},
        error: {}
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks
        },
        SIGNUP_USER(state, user) {
            state.user = user
        },
        HANDLE_ERROR(state, error) {
            state.error = error
        }
    },
    actions: {
        SIGNUP_ACTION: ({commit}, data) => {            
            axios.post('https://kasule-task-manager.herokuapp.com/users', data)
            .then((response) => {
                commit('SIGNUP_USER', response.data)
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log('data', data);
                
                console.log(error.response.data)
            })
        },
        GET_TASKS_ACTION: ({commit}) => {
            return axios.get('https://kasule-task-manager.herokuapp.com/task',
                {
                    headers: {
                  authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDhkMTIwODM1NTg3MjAwMTc1YzlmMGQiLCJpYXQiOjE1Njk4NDE0NjMsImV4cCI6MTU3MTA1MTA2M30.VOZ7bf7KM7BrRqB8P4eGwa9_gJi4StgDXUO4jURLwKo',
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
        }
    }
});