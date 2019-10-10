<template>
    <v-app color="white" class="hime">
    <v-card d-flex align-content-space-around flex-wrap>
        <NavBar :navItem="navItem" @click="toggleForm"/>
        <div>
            <signup v-if="slot==='signup'"></signup>
            <LogIn v-if="slot==='login'"/>
        </div>
    </v-card>
    </v-app>
</template>
<script>
import NavBar from '@/components/NavBar'
import Signup from '@/components/AppAuth/AppSignup'
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
        Signup
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
