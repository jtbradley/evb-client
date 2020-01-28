<template>
  <v-app>
    <v-content class="darkest--text pt-0">
      <div class="gradient">
        <v-container>
          <v-row>
            <nuxt-link nuxt to="/">
              <v-toolbar-title>
                <v-img width="85" class="ml-5" src="/everbrand-logo-dark.svg" alt="Everbrand" />
              </v-toolbar-title>
            </nuxt-link>
          </v-row>

          <nuxt />
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "./partials/navbar";
export default {
  components: {
    navbar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
div.gradient {
  height: 100%;
  width: 100%;
}
</style>

