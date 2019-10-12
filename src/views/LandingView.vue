<template>
    <div>
        <NavBar :navItem="navItem"/>
        <LandingPage msg="Get your task done.." />
        <TaskRender />
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
        navItem(){
            const avatarUrl = this.$store.state.AuthModule.avatar.error.error === 'No image found'? 'https://cdn.vuetifyjs.com/images/john.jpg': `${process.env.VUE_APP_BASE_URL}/users/${sessionStorage.getItem('auth-id')}/avatar`                     
            return `<div class="v-avatar" style="height: 48px; min-width: 48px; width: 48px;">
                <img
                    src="${avatarUrl}"
                    alt="avatar"
                />
            </div> `
        }
    }
}
</script>

<style lang="scss" scoped>

</style>