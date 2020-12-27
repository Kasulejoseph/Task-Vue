<template>
    <v-container class="auth-container">
    <v-card d-flex align-content-space-around flex-wrap class="auth-card">
        <nav-bar :navItem="navItem" @click="toggleForm"></nav-bar>
        <div>
            <sign-up v-if="slot==='signup'"></sign-up>
            <log-in v-if="slot==='login'"></log-in>
        </div>
    </v-card>
    </v-container>
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
 <style scoped>
 .auth-container {
    text-align: -webkit-center;
 }
 .auth-card {
    max-width: 90%;
 }
 
 </style>
