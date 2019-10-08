<template>
  <v-app slot="signup">
    <v-card
    width="500px" 
    class="mt-12 sign-form mx-auto">
      <v-card-title class="pb-3 text-center">
        <h1>Sign Up</h1>
      </v-card-title>
      <v-card-text>
        <v-form
        >
          <v-text-field 
          label="Username"
          prepend-icon="mdi-account-circle"
          v-model="username"
          :rules="username? [] : ['Required']"
           />
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
        <AuthButton leftBotton="Login" :registerText="registerText" :loading="loading" @click="registerUser"/>
          <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
       {{errorMessage}}
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    </v-card>
  </v-app>
</template>

<script>
import AuthButton from './AuthButton'
export default {
    components:{
        AuthButton
    },
    data () {
        return {
            showPassword: false,
            username: '',
            email: '',
            password: '',
            color: 'error',
            mode: '',
            snackbar: false,
            text: 'Hello, I\'m a snackbar',
            timeout: 6000,
            x: null,
            y: 'top',
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
      errorMessage() {
          if(this.$store.getters.GET_ERROR.status){
            this.snackbar = true 
            return this.$store.getters.GET_ERROR.error.split(':')[0]
          }
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