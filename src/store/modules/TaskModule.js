import axios from 'axios'

export default {
    state: {
        tasks: [],
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks
        },
    },
    actions: {
        GET_TASKS_ACTION: ({commit}) => {
            commit('SET_TASKS', '')
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
        }
    }
}