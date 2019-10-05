<template>
    <v-app color="white" class="hime">
    <v-card d-flex align-content-space-around flex-wrap>
        <NavBar/>
        <Signup/>
    </v-card>
    </v-app>
</template>
<script>
import Signup from '@/components/AppSignup'
import NavBar from '@/components/NavBar'

    export default {
        name: 'UserView',
        components: {
            Signup,
            NavBar
        }
    }
</script>

<style>
.hime {
    font-family: "Comfortaa-Bold", "Avenir", Helvetica, Arial, sans-serif;
  background-color: green;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 90vh;
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: relative;
  opacity: 0.8;
}
</style>