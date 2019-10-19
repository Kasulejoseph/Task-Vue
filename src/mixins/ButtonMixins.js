export const ButtonMixins = {
    methods: {
        deleteTask(task_id){            
            this.$store.dispatch('DELETE_TAST_ACTION', task_id).then(() => {
                this.$store.dispatch('GET_TASKS_ACTION')       
            })
            // this would work also
            // document.getElementById(task_id).style.display = 'none'
        }
    },
}