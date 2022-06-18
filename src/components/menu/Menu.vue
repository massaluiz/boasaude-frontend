<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col>
          MENU
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>

export default {

    name: "Menu",
    components: {
    
    },
    methods: {
      goToLink(where) {
        this.$router.push(where);
      }
    }
}
</script>