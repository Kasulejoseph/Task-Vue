<template>
  <v-app>
    <v-card
    width="500px" 
    class="mt-12 sign-form mx-auto">
      <v-card-title class="pb-3 text-center">
        <h1>Sign Up</h1>
      </v-card-title>
      <v-card-text>
        <v-form
        >
        
        {{username}}
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
      <v-card-actions>
        <v-btn color="success"
        @click="registerUser"
        >Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            showPassword: false,
            username: '',
            email: '',
            password: ''
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