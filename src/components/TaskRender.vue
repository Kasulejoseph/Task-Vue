<template>
  <div>
    <v-card max-width="1300" class="mx-auto" width="1215px" outlined>
      <div v-if="isItems">
        <v-list three-line>
          <v-subheader>Complete</v-subheader>
          <v-list-item-group v-if="items.complete ? selected : selected" multiple>
            <template v-for="(item, index) in items">
              <v-list-item :id="item._id" :key="item.title">
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="item.complete"
                      @change="ischecked(item._id, status=!item.complete)"
                      color="info"
                      hide-details
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class="item-title" v-text="item.complete"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.author"></v-list-item-subtitle>
                    <v-list-item-subtitle class="item-subtitle" v-text="item.desc"></v-list-item-subtitle>
                    <v-card-actions>
                      <v-btn class="ml-0 ma-2" color="primary" small dark>
                        Edit
                        <v-icon dark>mdi-playlist-edit</v-icon>
                      </v-btn>
                      <v-btn @click="deleteTask(item._id)" class="ma-2" color="red" small dark>
                        delete
                        <v-icon dark>mdi-delete</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text v-text="createdAt"></v-list-item-action-text>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import { ButtonMixins } from "../mixins/ButtonMixins";
export default {
  mixins: [ButtonMixins],
  data: () => ({
    selected: [1],
    checked: true,
    millSec: "",
    timePayload: 1 + "day ago"
  }),

  created: function() {
    this.$store.dispatch("GET_TASKS_ACTION");
  },

  computed: {
    isItems() {
      if (this.items.length === 0 || this.items === false) {
        return false;
      } else {
        return true;
      }
    },
    items() {
      if (this.$store.getters.GET_TASKS.tasks.data) {
        return this.$store.getters.GET_TASKS.tasks.data;
      }
      return false;
    },
    createdAt() {
      if (this.items) {
        return this.timePayload;
      }
      return false;
    }
  },
  watch: {
    createdAt() {
      this.items.forEach(element => {
        this.millsec = Math.abs(new Date() - new Date(element.createdAt));
      });
      const momentOfTime = moment.duration(this.millsec);
      this.timePayload = momentOfTime.days() + "days ago";
    }
  }
};
</script>

<style scoped>
.list-item {
  padding: 20px 30px;
  font-size: 40px;
}
.item-title {
  font-size: 40px;
}
.item-subtitle {
  font-size: 20px;
}
.item-icon {
  font-size: 80px;
}
</style>