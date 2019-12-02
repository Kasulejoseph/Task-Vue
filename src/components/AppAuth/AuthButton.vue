<template>
  <div>
    <v-card-actions>
      <v-btn color="success" @click="$emit('click')" :disabled="disabled">
        {{registerText}}
        <v-progress-circular
          indeterminate
          color="white"
          :style=" !loading? 'display: none': 'display:block'"
        ></v-progress-circular>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "AuthButton",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    registerText: {
      type: String
    },
    leftBotton: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
</style>