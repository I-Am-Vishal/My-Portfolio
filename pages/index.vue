<template>
  <div>
    <v-row>
      <v-col cols="12">
        <Appbar />
      </v-col>
    </v-row>
    <v-row
      class="mx-3"
      :style="$vuetify.breakpoint.mdAndDown ? '' : 'height:800px'"
    >
      <v-col
        v-if="$vuetify.breakpoint.mdAndDown"
        cols="12"
        sm="6"
        class="custom-background grow-img mb-2"
        style="height:400px"
      >
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex justify-center align-center white--text px-3"
        :class="$vuetify.breakpoint.mobile ? '' : 'svg-background'"
      >
        <span class="grow-img">
          <span class="text-sm-h3 text-h5">Hi i am </span> <br />
          <span class="text-sm-h1 text-h3 font-weight-bold"
            >Vishal Raj Sinha</span
          >
          <br />
          <span class="text-sm-h4 text-h5"> and i work as </span> <br />
          <span class="text-sm-h2 text-h3 red--text font-weight-bold"
            >Full Stack Developer</span
          >
        </span>
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.mdAndDown"
        cols="12"
        sm="6"
        class="custom-background grow-img"
      >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.custom-background {
  background-image: url('~/assets/my_portrait.png'), url('~/assets/svg1.svg') !important;
  background-size: contain !important;
  background-position: center !important;
}

.svg-background {
  background-image: url('~/assets/svg1.svg'), url('~/assets/svg2.svg') !important;
  background-position: right bottom, left top !important;
  background-size: 500px 400px;
  animation: slide 3s linear infinite !important;
}
</style>
