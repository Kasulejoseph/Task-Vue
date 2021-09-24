<template>
  <v-container>
    <add-task ></add-task>
  </v-container>
</template>
<script>
export default {
  name: "LandingPage",
  components: {
    AddTask: () => import("./AddTask")
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
