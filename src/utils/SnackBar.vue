<template>
    <v-app >
     <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
       {{errorMessage}}
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    </v-app>
</template>

<script>
    export default {
        name: 'SnackBar',
        props:{
          errorMessage:{
            type: String
          },
          color: {
            type: String
          },
          snackbar: {
            type: Boolean
          }
        },
        data () {
            return {
                showPassword: false,
                username: '',
                email: '',
                password: '',
                mode: '',
                text: 'Hello, I\'m a snackbar',
                timeout: 6000,
                x: null,
                y: 'top'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>