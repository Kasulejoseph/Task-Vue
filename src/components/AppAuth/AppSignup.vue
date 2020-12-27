<template>
  <div slot="signup">
    <v-card outlined class="sign-form">
      <div>
        <ValidationObserver rules="required" v-slot="{ valid }">
          <v-card-title class="pb-3 text-center">
            <h1>Sign Up</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <ValidationProvider name="username" rules="required" v-slot="{ errors }">
                <v-text-field
                  label="Username"
                  prepend-icon="mdi-account-circle"
                  v-model="username"
                />
                <span class="red--text" id="error">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                <v-text-field label="Email" type="email" prepend-icon="mdi-email" v-model="email" />
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
          <auth-button
            :disabled="!valid"
            leftBotton="Login"
            :registerText="registerText"
            :loading="loading"
            @click="registerUser"
          ></auth-button>
        </ValidationObserver>
      </div>
      <snack-bar :snackbar="snackbar" :color="color" :responseMessage="responseMessage"></snack-bar>
    </v-card>
  </div>
</template>

<script>
import AuthButton from "./AuthButton";
import SnackBar from "../../utils/SnackBar";
export default {
  components: {
    AuthButton,
    SnackBar
  },
  data() {
    return {
      showPassword: false,
      username: "",
      email: "",
      password: "",
      color: "error",
      snackbar: false,
      registerText: "Register"
    };
  },
  methods: {
    registerUser() {
      const payload = {
        name: this.username,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("SIGNUP_ACTION", payload);
    }
  },
  computed: {
    responseMessage() {
      if (this.$store.getters.GET_ERROR.status) {
        return this.$store.getters.GET_ERROR.error.split(":")[0];
      }
      if (this.$store.getters.GET_USER.signup.status) {
        return "Success!!";
      }
      return null;
    },
    loading() {
      return this.$store.getters.GET_LOADER;
    }
  },
  watch: {
    loading(newValue) {
      newValue ? (this.registerText = "") : (this.registerText = "Register");
    },
    responseMessage(newValue) {
      this.snackbar = true;
      if (newValue === "Success!!") {
        this.color = "success";
        this.$router.push("/tasks");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center !important;
  padding-top: 18px;
}
.sign-form {
}
</style>
