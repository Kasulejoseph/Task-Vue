<template>
    <div>
 <v-card
    max-width="1300"
    class="mx-auto"
  >
  <div v-if="items">
    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="white--text"
      >
        <template v-for="(item, index) in items">
          <v-list-item class="list-item" :key="item.title">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title class="item-title" v-text="item.complete"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.author"></v-list-item-subtitle>
                <v-list-item-subtitle class="item-subtitle" v-text="item.desc"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="createdAt"></v-list-item-action-text>
                <v-icon
                  v-if="!active && !item.complete "
                  class="item-icon"
                  color="grey lighten-1"
                >
                  mdi-thumb-down
                </v-icon>

                <v-icon
                  v-else
                  class="item-icon"
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
  </div>

  </v-card>
    </div>
</template>

<script>
import moment from 'moment'
  export default {
    data: () => ({
      selected: [1],
      millSec: ''
    }),

    created: function() {
      this.$store.dispatch('GET_TASKS_ACTION')
    },

    computed: {
      items () {     
        if(this.$store.getters.GET_TASKS.tasks.data) {
          return this.$store.getters.GET_TASKS.tasks.data
        }
        return false
      },
      createdAt:{
        get() {
          const taskArray = this.$store.getters.GET_TASKS.tasks.data
          taskArray.forEach(element => {
            this.millsec = Math.abs(new Date() - new Date(element.createdAt))
        });
        const timePayload = moment.duration(this.millsec)
          return timePayload.days() + 'days ago'
        },
        set(value) {
        }
      }

    }
    }
</script>

<style scoped>
.list-item{
  padding: 20px 30px;
  font-size: 40px;
}
.item-title{
  font-size: 40px;
}
.item-subtitle{
  font-size: 20px;
}
.item-icon{
  font-size: 80px;
}
</style>