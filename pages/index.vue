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
                    v-for="(skill, index) in skillset"
                    :key="index"
                    class="ma-4 pa-sm-4 grow-img"
                    style="cursor: pointer;"
                    color="red"
                    text-color="white"
                    outlined
                  >
                    <span>
                      <v-icon class="mr-3">{{ skill.icon }}</v-icon>
                      {{ skill.text }}</span
                    >
                  </v-chip>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="my-sm-10 mx-md-15">
      <v-col class="text-center">
        <span class="text-h3 font-weight-normal white--text"
          >Wana check out my details in traditional way ?
        </span>
      </v-col>
    </v-row>

    <v-row class="my-sm-15 mx-md-15 mx-2">
      <v-col class="text-center">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-img
              :src="require('~/assets/vishal-resume.png')"
              class="mx-auto grow-img add-shadow"
              style="cursor: pointer;"
              max-height="900px"
              max-width="600px"
            >
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn
                    ><a
                      href="/resume.pdf"
                      class="text-decoration-none white--text"
                      >Download</a
                    >
                  </v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </template>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="my-sm-10 mx-md-15">
      <v-col class="text-center">
        <span class="text-h3 font-weight-normal white--text"
          >Technologies i have worked on ?
        </span>
      </v-col>
    </v-row>

    <v-row class="my-sm-10 mx-md-2">
      <v-col class="text-center"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillset: [
        {
          text: 'HTML',
          icon: 'mdi-language-html5'
        },
        {
          text: 'CSS',
          icon: 'mdi-language-css3'
        },
        {
          text: 'JAVASCRIPT',
          icon: 'mdi-language-javascript'
        },
        {
          text: 'PYTHON',
          icon: 'mdi-language-python'
        },
        {
          text: 'VUE.JS',
          icon: 'mdi-vuejs'
        },
        {
          text: 'NUXT.JS',
          icon: 'mdi-nuxt'
        },
        {
          text: 'DJANGO',
          icon: 'mdi-language-python'
        },
        {
          text: 'SQL',
          icon: 'mdi-database-search'
        },
        {
          text: 'VUETIFY',
          icon: 'mdi-vuetify'
        },
        {
          text: 'BOOTSTRAP',
          icon: 'mdi-bootstrap'
        }
      ]
    }
  }
}
</script>
