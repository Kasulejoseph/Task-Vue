<template>
    <v-container class="auth-container">
    <v-card d-flex align-content-space-around flex-wrap class="auth-card">
        <nav-bar :navItem="navItem" @click="toggleForm"></nav-bar>
        <div class="row mt-5 auth-container-card">
            <div class="col">
                <img class="landing-image" src="https://media1.giphy.com/media/5QRnThZOV6csvKXdmB/200w.webp?cid=ecf05e47un8xeq74qbt4jp9d8pihvwc3jv1e99z82tokc90a&rid=200w.webp&ct=g" alt="task user">
            </div>
            <div class="col">
                <sign-up v-if="slot==='signup'"></sign-up>
                <log-in v-if="slot==='login'"></log-in>
            </div>            
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
                return "REGISTER"
            }
            return "Login"
            
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
 .landing-image {
     height: 25rem;
     width: 100%;
 }

 @media only screen and (max-width: 600px) {
     .landing-image {
         height: auto;
     }
     .auth-container-card {
         display: contents;
     }
}
 
 </style>
