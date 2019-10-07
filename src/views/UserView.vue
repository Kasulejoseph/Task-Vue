<template>
    <v-app color="white" class="hime">
    <v-card d-flex align-content-space-around flex-wrap>
        <NavBar/>
        <Signup/>
    </v-card>
    </v-app>
</template>
<script>
import Signup from '@/components/AppSignup'
import NavBar from '@/components/NavBar'

    export default {
        name: 'UserView',
        components: {
            Signup,
            NavBar
        }
    }
</script>

<style>
</style>