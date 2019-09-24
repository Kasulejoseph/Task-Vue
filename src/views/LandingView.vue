<template>
    <div>
        <NavBar />
        <LandingPage msg="Get your task done.." />
    </div>
</template>

<script>
import LandingPage from '@/components/LandingPage'
import NavBar from '@/components/NavBar'

export default {
    name: "LandingView",
    components: {
        LandingPage,
        NavBar
    }
}
</script>

<style lang="scss" scoped>

</style>