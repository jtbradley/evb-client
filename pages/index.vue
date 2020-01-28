<template>
  <div>
    <section class="cover white pb-5 pt-0">
      <!-- Desktop Cover Creative -->
      <div class="cover-creative full gradient p-absolute" v-show="$vuetify.breakpoint.mdAndUp">
        <v-img
          :src="cover.balloon"
          aspect-ratio="0.6766"
          class="balloon floating ml-auto mt-5 p-absolute"
        />
        <v-img :src="cover.wind" class="wind p-absolute ml-auto" />
        <img :src="cover.frameFull" class="frame p-absolute" />
      </div>
      <!--  -->

      <!-- Mobile Cover Creative -->
      <div class="gradient cover-creative mob p-relative" v-show="$vuetify.breakpoint.smAndDown">
        <v-img
          :src="cover.balloon"
          aspect-ratio="0.6766"
          class="balloon floating mx-auto mt-5 p-absolute"
          max-width="140"
        />
        <v-img :src="cover.wind" class="wind mx-auto" width="100%" max-width="340" />
        <v-img :src="cover.frameMobile" class="frame" />
      </div>
      <!--  -->

      <v-container class="text-center text-md-left">
        <v-responsive class="mx-auto overflow-visible" max-width="1024">
          <v-row class="cover-content">
            <v-col cols="12" md="6" lg="6">
              <h1
                :class="[ $vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-3']"
                class="mb-5"
              >We Adapt</h1>

              <p
                class="mt-4 mb-5 d-inline-block body-1 medGrey--text"
              >Everbrand is a technology focused web agency that makes modern methodologies accessible to small and midsized businesses.</p>

              <v-btn color="primary" class="mt-5 text-capitalize">Who We Are</v-btn>
              <v-btn
                color="primary"
                class="mt-5 text-capitalize"
                v-show="$vuetify.breakpoint.smAndDown"
                outlined
              >Site Audit</v-btn>
            </v-col>

            <v-col
              cols="12"
              md="4"
              lg="4"
              offset-md="1"
              offset-lg="1"
              v-show="$vuetify.breakpoint.mdAndUp"
            >
              <v-card class="panel mb-5">
                <v-container>
                  <v-img src="/trustpilot.png" max-width="170" class="mx-auto"></v-img>
                </v-container>
              </v-card>
              <v-card class="panel">
                <v-card-text bottom>
                  <h3 class="display-1 mb-3 darkest--text">Site Audit</h3>
                  <p
                    class="body-2 mb-5"
                  >Our experts will evaluate your site and give you a detailed analysis of branding and performance, at no cost whatsoever.</p>

                  <v-form class="mt-5">
                    <v-text-field
                      v-model.trim="form.siteUrl"
                      label="Web Address"
                      type="url"
                      :error-messages="errors.site_url"
                      background-color="white"
                      required
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      v-model.trim="form.email"
                      label="E-mail"
                      type="email"
                      :rules="form.emailRules"
                      :error-messages="errors.email"
                      background-color="white"
                      required
                      outlined
                      dense
                    ></v-text-field>

                    <v-btn
                      class="text-capitalize primary--text"
                      width="100%"
                      outlined
                    >Get My Results</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </section>

    <section class="banner gradient">
      <v-container>
        <v-responsive class="mx-auto overflow-visible" max-width="1024">
          <v-col cols="12">
            <h3 class="display-1 white--text">
              Making the web
              <br />a more
              <span class="secondary--text">beautiful</span>
              <br />place.
            </h3>
          </v-col>
        </v-responsive>
      </v-container>
    </section>

    <section class="services white">
      <v-container class="text-center text-md-left py-5">
        <v-responsive class="mx-auto overflow-visible" max-width="1024">
          <h2
            :class="[ $vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-2']"
            class="text-center mb-5"
          >How We Help</h2>
          <v-row class="py-5">
            <v-col v-for="(service, index) in services" :key="index" cols="12" md="6">
              <v-hover v-slot:default="{ hover }">
                <nuxt-link
                  :to="service.link"
                  @mouseover="hover = true"
                  @mouseleave="hover = false"
                  class="service"
                  :class="hover ? 'primary--text' : 'darkest--text'"
                >
                  <h3 class="display-1 mb-3">{{ service.title }}</h3>
                  <p
                    class="body-1"
                    :class="hover ? 'primary--text' : 'medGrey--text'"
                  >{{ service.description }}</p>
                  <v-icon
                    v-show="$vuetify.breakpoint.mdAndUp"
                    class="primary--text"
                  >mdi-arrow-right-thick</v-icon>
                </nuxt-link>
              </v-hover>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </section>

    <section class="dashboard softAccent">
      <v-container class="text-center text-md-left py-5">
        <v-responsive class="mx-auto overflow-visible" max-width="1024">
          <h2
            :class="[ $vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-2']"
            class="text-center mb-5"
          >We Make It Easy</h2>
          <v-row class="py-5">
            <v-col cols="12" md="5">
              <h3
                class="title medGrey--text mb-3"
              >We develop modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.</h3>
              <v-list class="softAccent text-left">
                <v-list-group v-for="(item, i) in dashboard.items" :key="i" :value="item.expanded">
                  <template v-slot:activator>
                    <v-list-item-avatar>
                      <v-icon class="success--text">mdi-check-bold</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="title">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item>
                    <v-list-item-content>
                      <p class="medGrey--text body-1">{{ item.body }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-col>
            <v-col cols="12" md="7">
              <v-card class="mx-auto panel" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
              </v-card>
              <br />
              <v-card class="mx-auto mt-5 panel" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cover: {
        balloon: require("../static/balloon.svg"),
        wind: require("../static/wind.svg"),
        frameFull: require("../static/cover-frame-full.svg"),
        frameMobile: require("@/static/cover-mob-frame.svg")
      },
      form: {
        valid: true,
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ]
      },
      services: [
        {
          title: "Branding & Identity Design",
          description:
            "We develop modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
          link: "/"
        },
        {
          title: "Digital Marketing",
          description:
            "We develop modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
          link: "/"
        },
        {
          title: "Web & Mobile Development",
          description:
            "We develop modern and effective websites, software for companies, online stores & web portals, and refactor & update legacy code.",
          link: "/"
        },
        {
          title: "SEO Optimization",
          description:
            "We develop modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
          link: "/"
        }
      ],
      dashboard: {
        items: [
          {
            title: "Project Updates",
            body:
              "Trello integration modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
            expanded: true
          },
          {
            title: "Communication",
            body: "No more endless email threads.",
            expanded: false
          },
          {
            title: "Reports & Analytics",
            body:
              "Trello integration modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
            expanded: false
          },
          {
            title: "Manage Hosting",
            body:
              "Trello integration modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
            expanded: false
          },
          {
            title: "Payment Processing",
            body:
              "Trello integration modern and effective websites, software for companies, online stores and web portals and we refactor and update legacy codebases.",
            expanded: false
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
/* Cover section */

section.cover {
  margin-top: -70px;
  border-bottom-left-radius: 100px;
  position: relative;
  z-index: 1;
}

.cover-content {
  z-index: 1;
  position: relative;
}

.cover-creative {
}

.cover-creative .frame {
  /* margin-top: -80px; */
}

.balloon {
  z-index: 1;
}

/* Cover Creative - Full */

.cover-creative.full {
  z-index: 0;
  right: 0;
  width: 700px;
  height: 410px;
}

.cover-creative.full .balloon {
  right: 35px;
  top: 25px;
  width: 180px;
}

.cover-creative.full .wind {
  right: 0;
  bottom: 0;
  width: 280px;
}

.cover-creative.full .frame {
  width: 101%;
  /* margin-left: -2px; */
  right: 0;
}
/*  */

/* Cover Creative - Mobile */
.cover-creative.mob {
  min-height: 300px;
}

.cover-creative.mob .balloon {
  left: 0;
  right: 0;
}

.cover-creative.mob .wind {
  width: 400px;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
}

.cover-creative.mob .frame {
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

/*  */

section.banner {
  margin-top: -90px;
  margin-bottom: -90px;
  padding-top: 90px;
  padding-bottom: 90px;
  min-height: 260px;
}

section.services {
  border-top-left-radius: 100px;
  position: relative;
  z-index: 1;
}

section.services .service {
  text-decoration: none !important;
}

/* section.services .service p {
  color: var(--v-medGrey-base) !important;
} */

@media screen and (min-width: 600px) {
}

@media screen and (min-width: 960px) {
  .cover-content {
    margin-top: 190px;
  }
}

@media screen and (min-width: 1264px) {
  .cover-creative.full {
    z-index: 0;
    right: 0;
    width: 800px;
    height: 470px;
  }

  .cover-creative.full .balloon {
    right: 125px;
    top: 20px;
    width: 220px;
  }

  .cover-creative.full .wind {
    right: 0;
    bottom: 5px;
    width: 500px;
  }

  .cover-creative.full .frame {
    width: 101%;
    /* margin-left: -2px; */
    right: 0;
  }
}
/*  */
</style>
