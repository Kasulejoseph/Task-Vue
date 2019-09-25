<template>
    <div>
 <v-card
    max-width="1300"
    class="mx-auto"
  >

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title v-text="item.complete"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.author"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.desc"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.createdAt"></v-list-item-action-text>
                <v-icon
                  v-if="!active && !item.complete "

                  color="grey lighten-1"
                >
                  mdi-thumb-down
                </v-icon>

                <v-icon
                  v-else
                  color="green"
                >
                  mdi-thumb-up
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      selected: [1],
    }),

    created: function() {
      this.$store.dispatch('GET_TASKS_ACTION')
    },
    computed: {
      items () {
        return this.$store.getters.GET_TASKS.tasks.data
      }
    }
        
    }
</script>

<style scoped>

</style>