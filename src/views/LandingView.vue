<template>
    <div>
        <NavBar />
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
    }
}
</script>

<style lang="scss" scoped>

</style>