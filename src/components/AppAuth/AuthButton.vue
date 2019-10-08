<template>
    <div>
      <v-card-actions>
        <v-btn color="success"
        @click="$emit('click')"
        >
        {{registerText}}
        <v-progress-circular
      indeterminate
      color="white"
      :style=" !loading? 'display: none': 'display:block'"
    ></v-progress-circular>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">{{leftBotton}}</v-btn>
      </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: 'AuthButton',
        props:{
            loading:{
                type: Boolean,
                default: false
            },
            registerText:{
                type: String
            },
            leftBotton: {
                type: String
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>