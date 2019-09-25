<template>
  <v-content class="landing">
    <v-container>
    <h1>{{ msg }}</h1>
    <h6>{{ mgt }}</h6>
      <input type="text" v-model="results" name="text" id="text" placeholder="enter" />
      <button @click="pressed">Click me</button>
      <p></p>
    <span>{{count}}</span>
    </v-container>
  </v-content>
</template>
<script>

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  methods: {
    pressed() {
      this.$store.dispatch('GET_TASKS_ACTION')
      
    }
  },

  computed: {
    mgt() {
      return this.$store.getters.GET_TASKS
      }, 

    count() {
      return this.$store.getters.GET_TASKS
    }
  },
  data() {
    return{ 
      results: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
