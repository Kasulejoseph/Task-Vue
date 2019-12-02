<template>
  <v-app slot="login">
    <v-card outlined class="sign-form">
      <div class="form-content">
        <ValidationObserver rules="required" v-slot="{ valid }">
          <v-card-title class="pb-3 text-center">
            <h1>Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
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
                />
                <span class="red--text" id="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <auth-button
            :disabled="!valid"
            :registerText="registerText"
            :loading="loading"
            @click="registerUser"
          ></auth-button>
        </ValidationObserver>
      </div>
      <snack-bar :snackbar="snackbar" :color="color" :responseMessage="responseMessage"></snack-bar>
    </v-card>
  </v-app>
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
      email: "",
      password: "",
      color: "red",
      snackbar: false,
      registerText: "LOGIN"
    };
  },
  methods: {
    registerUser() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("LOGIN_ACTION", payload);
    }
  },
  computed: {
    responseMessage() {
      if (this.$store.getters.GET_ERROR.status) {
        return this.$store.getters.GET_ERROR.error.split(":")[0];
      }
      if (this.$store.getters.GET_USER.login.status) {
        return this.$store.getters.GET_USER.login.message;
      }
      return null;
    },
    loading() {
      return this.$store.getters.GET_LOADER;
    }
  },
  watch: {
    loading(newValue) {
      newValue ? (this.registerText = "") : (this.registerText = "LOGIN");
    },
    responseMessage(newValue) {
      this.snackbar = false;
      if (newValue === null) {
        return;
      }
      if (newValue === "Logged in successfully!!") {
        this.color = "success";
        this.snackbar = true;
        this.$router.push("/tasks");
      }
      if (newValue === "Invalid credentials") {
        this.snackbar = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center !important;
  padding-top: 18px;
  padding-bottom: 21px !important;
}
.sign-form {
  margin-top: 100px !important;
  margin: 20%;
  height: 20%;
}
.form-content {
  height: -webkit-fill-available;
}
</style>

