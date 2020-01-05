<template>
  <v-app>
    <navbar />
    <v-content class="darkest--text">
      <!-- <v-container> -->
        <nuxt />
      <!-- </v-container> -->
    </v-content>


    <!-- <v-footer
      app
    >
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import navbar from './partials/navbar'
export default {
  components: {
    navbar
  },
  data () {
    return {
      fixed: false,
    }
  }
}
</script>

