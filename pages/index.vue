<template>
  <div>
    <v-row>
      <v-col cols="12">
        <Appbar />
      </v-col>
    </v-row>

    <v-row
      class="mx-3 mb-sm-10"
      :style="$vuetify.breakpoint.mdAndDown ? '' : 'height:800px'"
    >
      <v-col
        v-if="$vuetify.breakpoint.mdAndDown"
        cols="12"
        sm="6"
        class="pointing-right-background grow-img mb-2"
        style="height:400px"
      >
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex justify-center align-center white--text px-3"
        :class="$vuetify.breakpoint.mobile ? '' : 'svg-shaped-background'"
      >
        <span class="grow-img">
          <span class="text-sm-h4 text-h5">
            Hi, I'm
          </span>
          <br />

          <span class="text-lg-h1 text-h3 font-weight-bold red--text"
            >Vishal Raj Sinha</span
          ><br />
          <span class="text-sm-h4 text-h5">Full stack developer </span>
        </span>
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.mdAndDown"
        cols="12"
        sm="6"
        class="pointing-left-background  grow-img"
      >
      </v-col>
    </v-row>

    <v-row class="my-sm-10 mx-md-15">
      <v-col cols="12">
        <v-card
          class="rounded-xl px-sm-10 px-5 py-10 mx-sm-15 my-sm-12"
          dark
          style="background-color: black;"
        >
          <v-row>
            <v-col cols="12" lg="4" class="ma-0 pa-0 rounded-xl">
              <v-img
                :src="
                  require($vuetify.breakpoint.mdAndDown
                    ? '~/assets/my_portrait.png'
                    : '~/assets/pointing-right.png')
                "
                class="mx-auto ma-0 pa-0 grow-img"
                style="cursor: pointer;"
                max-height="400px"
                contain
              ></v-img>
            </v-col>

            <v-col cols="12" lg="8">
              <v-row class="mx-auto">
                <v-col cols="12" class="text-left mt-2"
                  ><p class="text-h4">ABOUT ME</p></v-col
                >
                <v-col cols="12" class="text-left">
                  <span style="line-height:35px"
                    >Hey , my name is
                    <span class="red--text">Vishal Raj Sinha</span>
                    and i am a Mechanical engineering graduate <br />
                    currently working as a full stack developer.I natively
                    belong from Ambikapur <br />
                    a city situated in Chhattisgarh state. I have completed my
                    Graduation from <br />
                    <span class="red--text">Dr. CV Raman University</span>
                    Kota Bilaspur C.G. I pursue 4 years of experience <br />
                    in
                    <span class="red--text">Web Application</span>
                    development.
                  </span>
                </v-col>

                <v-col cols="12" class="text-left text-h5">
                  SKILLS
                </v-col>

                <v-col cols="12" class="text-left">
                  <v-chip
                    v-for="skill in skills"
                    :key="skill"
                    class="ma-4 grow-img"
                    style="cursor: pointer;"
                    color="red"
                    text-color="white"
                    outlined
                  >
                    {{ skill }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: ['Vue.js', 'Nuxt.js', 'Django', 'SQL', 'Vuetify', 'Bootstrap']
    }
  }
}
</script>
