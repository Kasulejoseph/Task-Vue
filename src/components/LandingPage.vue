<template>
  <v-content class="landing">
    <v-container>
    <h1>{{ msg }}</h1>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
