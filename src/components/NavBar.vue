<template>
<div>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Task</span>
        <span class="font-weight-light">-App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
</div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {}
    }
</script>

<style scoped>

</style>