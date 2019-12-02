<template>
  <v-container>
    <v-btn @click="showForm" class="ma-2" color="primary" dark>
      Add
      <v-icon dark right>mdi-plus-box</v-icon>
    </v-btn>
    <v-card class="mx-auto mt-5" max-width="100%" outlined v-show="isFormOpen">
      <ValidationObserver rules="required" v-slot="{ valid }">
        <v-list-item>
          <v-list-item-content class="input-field">
            <v-text-field v-model="category" counter="10" label="Category" class="pb-5" required></v-text-field>
            <ValidationProvider name="Task-Todo" rules="required" v-slot="{ errors }">
              <v-textarea
                v-model="desc"
                label="Task Todo"
                clearable="clearable"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
              <span class="red--text" id="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-card-actions @click="addTask">
          <v-btn :disabled="!valid" block text>CREATE</v-btn>
        </v-card-actions>
      </ValidationObserver>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desc: "",
      category: "",
      isFormOpen: false
    };
  },
  computed: {
    taskPayload() {
      return {
        desc: this.desc
      };
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch("CREATE_TASK_ACTION", this.taskPayload);
    },
    showForm() {
      if (this.isFormOpen) {
        this.isFormOpen = false;
      } else {
        this.isFormOpen = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  display: block;
}
</style>