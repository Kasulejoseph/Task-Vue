<template>
  <v-app slot="signup">
    <v-card
    width="500px" 
    class="mt-12 sign-form mx-auto">
      <ValidationObserver
        rules="required"
        v-slot="{ valid }"
      >
      <v-card-title class="pb-3 text-center">
        <h1>Sign Up</h1>
      </v-card-title>
      <v-card-text>
        <v-form
        >
        <ValidationProvider name="username" rules="required" v-slot="{ errors }">
          <v-text-field 
          label="Username"
          prepend-icon="mdi-account-circle"
          v-model="username"
           />
          <span class="red--text" id="error">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <v-text-field label="Email"
          type="email"
          prepend-icon="mdi-email"
          v-model="email"
           />
          <span class="red--text" id="error">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider name="password" rules="required" v-slot="{ errors }">
          <v-text-field 
            :type="showPassword ? 'text': 'Password'"
            label="Password" 
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon=" showPassword? 'mdi-eye': 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="password? [] : ['Required']"
          />
        </ValidationProvider>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <AuthButton :disabled="!valid" leftBotton="Login" :registerText="registerText" :loading="loading" @click="registerUser"/>
      </ValidationObserver>
      <SnackBar :snackbar ="snackbar" :color="color" :responseMessage ="responseMessage"/>
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
            color: 'error',
            snackbar: false,
            registerText: 'Register',
        }
  },
  methods: {
    registerUser (){
        const payload = {
            name: this.username,
            email: this.email,
            password: this.password 
        }
        this.$store.dispatch('SIGNUP_ACTION', payload)       
    }
  },
  computed: {
      responseMessage() {
          if(this.$store.getters.GET_ERROR.status){
            this.snackbar = true 
            return this.$store.getters.GET_ERROR.error.split(':')[0]
          }
          if(this.$store.getters.GET_USER.signup.status){
            this.snackbar = true 
            this.color = 'success'
            this.$router.push('/')
            return 'Success!!'
          }
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