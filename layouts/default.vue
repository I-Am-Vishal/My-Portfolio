<template>
  <v-app>
    <v-main style="background-color:rgb(8, 8, 8)">
      <v-container fluid>
        <v-card
          class="pa-sm-5 pa-2 ma-sm-10 ma-2 rounded-xl add-shadow"
          style="background-color:black;"
        >
          <Nuxt />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
