import axios from 'axios'

export default {
    state: {
        tasks: [],
        updateTasks: []
    },
    
    mutations: {
        SET_TASKS(state, tasks) {
            if(tasks) {
                state.tasks = tasks
            }
            state.tasks = tasks
        },
        CREATE_TASK(state, task) {
            state.tasks = {data: [...state.tasks.data, task.data]}
            state.tasks.data.reverse()
        },
        DELETE_TASK(state, task) {
            const oldTaskList = state.tasks.data
            state.tasks = oldTaskList.filter(element => element._id !== task._id)
        },

    },

    actions: {
        UPDATE_STATUS: ({commit}, payload) => {            
            const token = sessionStorage.getItem('auth-token')            
            return axios({
                url: `${process.env.VUE_APP_BASE_URL}/tasks/${payload.id}`,
                method: 'PATCH',
                headers: {
                    Authorization: token,
                    'content-type': 'application/json'
                },
                data: {complete: payload.status}

            })
            .then(() => {           
            })
            .catch((error) => {                
                commit('HANDLE_ERROR', error.response)
            })

        },

        DELETE_TAST_ACTION: ({commit}, task_id) => {
            const token = sessionStorage.getItem('auth-token')
            return axios.delete(`${process.env.VUE_APP_BASE_URL}/tasks/${task_id}`, {
                headers: {
                    authorization: token,
                }
            })
            .then((response) => {
                commit('DELETE_TASK', response.data.data)                
            })
            .catch((error) => {
                commit('HANDLE_ERROR', error.response)
            })
        },

        CREATE_TASK_ACTION: async ({
            commit
        }, dataPayload) => {
            const token = sessionStorage.getItem('auth-token')
            try {
                const {
                    data
                } = await axios({
                    url: `${process.env.VUE_APP_BASE_URL}/task`,
                    method: 'POST',
                    headers: {
                        Authorization: token,
                    },
                    data: dataPayload
                })
                commit('CREATE_TASK', data)  
            } catch (error) {
                commit('HANDLE_ERROR', error.response)
            }
        },

        GET_TASKS_ACTION: ({
            commit
        }) => {
            commit('SET_TASKS', '')
            const token = sessionStorage.getItem('auth-token')
            return axios.get(`${process.env.VUE_APP_BASE_URL}/task`, {
                    headers: {
                        authorization: token,
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((response) => {
                    commit('SET_TASKS', response.data)
                })
                .catch((error) => {
                    commit('HANDLE_ERROR', error.response)
                })
        }
    },

    getters: {
        GET_TASKS(state) {
            return state
        },

    }
}