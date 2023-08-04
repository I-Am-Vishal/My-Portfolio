<template>
  <div>
    <v-card
      class="d-flex justify-space-around align-center py-3 mx-auto"
      style="background-color: transparent"
      flat
    >
      <v-row>
        <v-col cols="12" sm="8" class="text-center">
          <a
            href="#"
            class="app-bar-navigation-text mr-sm-10 mr-2 pa-sm-3 rounded-pill"
            >Home</a
          >
          <a
            href="#"
            class="app-bar-navigation-text mr-sm-10 mr-2 pa-sm-3 rounded-pill"
            >Blog</a
          >
          <a href="#" class="app-bar-navigation-text pa-sm-3 rounded-pill"
            >About</a
          >
        </v-col>
        <v-col cols="12" sm="4" class="text-center">
          <v-btn
            class="rounded-pill button no-uppercase font-weight-normal white--text grow-img"
            color="red"
            x-large
            >Contact Me</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped></style>
