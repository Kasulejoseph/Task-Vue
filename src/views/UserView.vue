<template>
    <v-app color="white" class="hime">
    <v-card d-flex align-content-space-around flex-wrap>
        <NavBar/>
        <user-auth></user-auth>
    </v-card>
    </v-app>
</template>
<script>
import UserAuth from '@/components/AppAuth'
import NavBar from '@/components/NavBar'

    export default {
        name: 'UserView',
        components: {
            'user-auth': UserAuth,
            NavBar
        }
    }
</script>
