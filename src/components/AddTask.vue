<template>
  <v-container >
         <v-btn class="ma-2" color="primary" dark>Add
            <v-icon dark right>mdi-circle-edit-outline</v-icon>
        </v-btn>
        <v-card
        class="mx-auto"
        max-width="500"
        outlined
        >
        <v-list-item>
            <v-list-item-content>
        <v-text-field
        v-model="category"
        counter="10"
        label="Category"
        class="pb-5"
        required
      ></v-text-field>
        <v-textarea
          v-model="desc"
          label="Task Todo"
          clearable="clearable"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
        </v-list-item-content>
        </v-list-item>
            <v-card-actions>
      <v-btn text>Add</v-btn>
    </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                desc: '',
                category: ''
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>