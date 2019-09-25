import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        key: "From store",
        count: 0,
        tasks: [],
        error: {}
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks
        },
        HANDLE_ERROR(state, error) {
            state.error = error
        }
    },
    actions: {
        GET_TASKS_ACTION: ({commit}) => {
            return axios.get('http://127.0.0.1:8000/task',
                {
                    headers: {
                //   authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDg2MDY1YzMxNzlhNjVkMGU5MmJhY2EiLCJpYXQiOjE1NjkwNjUwMzUsImV4cCI6MTU3MDI3NDYzNX0.VhCMi8WMTgP3VfW9X0eCTpdkhsxyjENtCn3y0tBhPAw',
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
        }
    }
});