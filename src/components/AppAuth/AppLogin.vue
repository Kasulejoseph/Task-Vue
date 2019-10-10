<template>
  <v-app slot="login">
    <v-card
    width="500px" 
    class="mt-12 sign-form mx-auto">
      <ValidationObserver
          rules="required"
          v-slot="{ valid }"
      >
      <v-card-title class="pb-3 text-center">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form
        >
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
          />
          <span class="red--text" id="error">{{ errors[0] }}</span>
        </ValidationProvider>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <AuthButton :disabled="!valid" :registerText="registerText" :loading="loading" @click="registerUser"/>
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
        email: '',
        password: '',
        color: 'red',
        snackbar: false,
        registerText: 'LOGIN',
      }
  },
  methods: {
    registerUser (){
        const payload = {
          email: this.email,
          password: this.password 
        }
        this.$store.dispatch('LOGIN_ACTION', payload)
    }
  },
  computed: {
    responseMessage() {
      if(this.$store.getters.GET_ERROR.status){
        return this.$store.getters.GET_ERROR.error.split(':')[0]
      }
      if(this.$store.getters.GET_USER.login.status){
        return this.$store.getters.GET_USER.login.message;
      }
      return null
    },
    loading() {
        return this.$store.getters.GET_LOADER
    } 
  },
  watch: {
    loading(newValue){
      newValue? this.registerText = '': this.registerText = 'LOGIN'
    },
    responseMessage(newValue) {
      this.snackbar = true 
      if(newValue === 'Success!!') {
        this.color = 'success'
        this.$router.push('/')
      }
    }

  }   
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

