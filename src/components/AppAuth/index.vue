<template>
    <v-app >
        <div>
            <signup v-if="slot==='signup'"></signup>
            <LogIn v-if="slot==='login'"/>
        </div>
    </v-app>
</template>
<script>
import Signup from './AppSignup'
import LogIn from './AppLogin'
    export default {
        name: 'UserView',
        components: {
            signup: Signup,
            LogIn
        },
        data() {
            return {
                slot: 'login'
            }
        },
    }
</script>

<style>
</style>