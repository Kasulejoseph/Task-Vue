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
        target="_blank"
        @click="yy"
      >
        <span class="mr-2" v-html="navItem">
            <!-- <v-avatar>
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                >
            </v-avatar> -->
        </span>
      </v-btn>
    </v-app-bar>
</div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['navItem'],
        methods: {
          yy() {
            this.$router.push('/')
          }
        },
    }
</script>

<style scoped>

</style>