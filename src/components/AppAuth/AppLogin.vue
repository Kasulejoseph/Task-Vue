<template>
  <v-app slot="login">
    <v-card
    width="500px" 
    class="mt-12 sign-form mx-auto">
      <v-card-title class="pb-3 text-center">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form
        >
          <v-text-field label="Email"
          type="email"
          prepend-icon="mdi-email"
          v-model="email"
          :rules="email? [] : ['Required']"
           />
          <v-text-field 
            :type="showPassword ? 'text': 'Password'"
            label="Password" 
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon=" showPassword? 'mdi-eye': 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="password? [] : ['Required']"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <AuthButton leftBotton="Signup" :registerText="registerText" :loading="loading" @click="registerUser"/>
    <SnackBar :snackbar ="snackbar" :color="color" :errorMessage ="errorMessage"/>
    </v-card>
  </v-app>
</template>

<script>
import AuthButton from './AuthButton'
import SnackBar from '../../utils/SnackBar'
export default {
    components:{
      AuthButton,
      SnackBar
    },
    data () {
      return {
        showPassword: false,
        username: '',
        email: '',
        password: '',
        snackbar: false,
        color: 'red',
        registerText: 'Register',
      }
  },
  methods: {
    registerUser (){
        const payload = {
          email: this.email,
          password: this.password 
        }
        this.$store.dispatch('SIGNUP_ACTION', payload)       
    }
  },
  computed: {
    errorMessage() {
      if(this.$store.getters.GET_ERROR.status){
        this.snackbar = true 
        return this.$store.getters.GET_ERROR.error.split(':')[0]
      }
      this.color = 'blue'
      return 'loading..'
    },
    loading() {
      if(this.$store.getters.GET_LOADER){
        this.registerText = ''
        return this.$store.getters.GET_LOADER
      }
      this.registerText = 'Register'
    } 
  },    
    }
</script>

<style lang="scss" scoped>
.text-center {
    text-align: center !important;
    margin-left: 120px;
}
.sign-form {
    margin-top: 500px !important;
}

</style>

