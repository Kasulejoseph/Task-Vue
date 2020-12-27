<template>
  <v-content class="landing">
    <v-container>
      <v-row no-gutters>
        <!-- <v-col
        cols="12"
        md="8"
        > -->
        <add-task ></add-task>
        <!-- </v-col>
        <v-col
        cols="12"
        md=""
      >
      <h1 class="text-center">{{ msg }}</h1>
        </v-col> -->
        <!-- <v-col>
        </v-col> -->
      </v-row>
    </v-container>
  </v-content>
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
.landing {
  padding: 15px 0px 0px !important;
}
</style>
