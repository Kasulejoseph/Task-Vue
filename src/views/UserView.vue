<template>
    <div>
    <v-card d-flex align-content-space-around flex-wrap>
        <nav-bar :navItem="navItem" @click="toggleForm"></nav-bar>
        <div>
            <sign-up v-if="slot==='signup'"></sign-up>
            <log-in v-if="slot==='login'"></log-in>
        </div>
    </v-card>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import LogIn from '@/components/AppAuth/AppLogin'

export default {
    name: 'UserView',
    data() {
        return {
            slot: 'login'
        }
    },
    components: {
        NavBar,
        LogIn,
        SignUp: () => import('@/components/AppAuth/AppSignup.vue')
    },
    computed: {
        navItem() {
            if(this.slot === 'login') {
            return `
                <v-btn color="info">REGISTER</v-btn>
                `
            }
            return `
                <v-btn color="info">Login</v-btn>
                `
        }
    },
    methods: {
        toggleForm() {
            if(this.slot === 'login' ) {
                this.slot = 'signup'
            }else{
                this.slot = 'login'
            }
        }
    },
}
</script>
