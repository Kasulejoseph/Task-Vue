<template>
  <v-app-bar app>
    <div class="container ml-md-5 mr-md-5 row">
      <v-toolbar-title class="headline col-md-10 col-8 text-uppercase ml-5">
        <div class="row">
          <span class="material-icons mr-2">add_task</span>
          <div>
            <span>Task</span>
            <span class="font-weight-light">-IFY</span>
          </div>
        </div>
      </v-toolbar-title>
      <v-btn v-if="!isProfile" class="col mt-2 nav-profile-items" text target="_blank" @click="$emit('click')">
        <span v-html="navItem"></span>
      </v-btn>
      <div v-if="isProfile" class="col nav-profile-items">
        <span v-html="profilePic"></span>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  props: ["navItem", "isProfile", "profilePic"]
};
</script>

<style scoped>
.material-icons {
  font-size: 30px;
}
.nav-profile-items {
  text-align: center;
}
</style>
