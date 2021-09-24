<template>
    <div>
        <nav-bar :isProfile="isProfile" :profilePic="profilePic"></nav-bar>
        <landing-page msg="Get your task done.." ></landing-page>
        <task-render></task-render>
    </div>
</template>

<script>
import LandingPage from '@/components/LandingPage'
import NavBar from '@/components/NavBar'
import TaskRender from '@/components/TaskRender'

export default {
    name: "LandingView",
    components: {
        LandingPage,
        NavBar,
        TaskRender
    },
    created() {
        this.$store.dispatch('AVATAR_ACTION')
    },
    computed: {
        profilePic(){
            const avatarUrl = this.isProfile ? 'https://cdn.vuetifyjs.com/images/john.jpg': `${process.env.VUE_APP_BASE_URL}/users/${sessionStorage.getItem('auth-id')}/avatar`                     
            return `<div class="v-avatar" style="height: 48px; min-width: 48px; width: 48px;">
                <img
                    src="${avatarUrl}"
                    alt="avatar"
                />
            </div> `
        },

        isProfile () {
            return this.$store.state.AuthModule.avatar.error.error === 'No image found'? true : false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
