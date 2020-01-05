<template>
  <section class="cover white">
    <v-img max-width="800" width class="cover-creative" src="Cover-Creative.svg" />

    <v-container>
      <v-row class="cover-content">
        <v-col cols="6">
          <h1 class="display-3 mb-5">We Adapt</h1>

          <p
            class="mt-4 mb-5 d-inline-block body-1 medGrey--text"
          >Everbrand is a technology focused web agency that makes modern methodologies accessible to small and midsized businesses.</p>

          <v-btn color="primary" class="mt-5 text-capitalize">Who We Are</v-btn>
        </v-col>

        <v-col cols="4">
          <v-card class="panel mb-5" >
            <v-container>
              <v-img src="/trustpilot.png" max-width="170" class="mx-auto"></v-img>
            </v-container>
          </v-card>
          <v-card class="panel">
              <v-card-text bottom>
                <h3 class="display-1 mb-3 darkest--text">Site Audit</h3>
                <p class="body-2 mb-5">Our experts will evaluate your site and give you a detailed analysis of branding and performance, at no cost whatsoever.</p>

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
                  >
                  </v-text-field>

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
                  >
                  </v-text-field>

                  <v-btn class="text-capitalize primary--text" width="100%" outlined >Get My Results</v-btn>

                </v-form>
              </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    }
    }
  }
};
</script>

<style scoped>
.cover {
  margin-top: -70px;
  padding-top: 70px;
  min-height: 540px;
}

.cover-creative {
  position: absolute;
  z-index: 0;
  top: -70px;
  right: 0;
  width: 100%;
}

.cover-content {
  margin-top: 5rem;
  z-index: 1;
  position: relative;
}
</style>
