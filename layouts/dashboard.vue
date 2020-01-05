<template>
<!-- Dashboard rendered as SPA -->
<no-ssr>
  <v-app>
    <dashNavbar />
    <v-content class="darkest--text">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>


    <v-footer :fixed="fixed" app >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</no-ssr>
</template>

<script>
import dashNavbar from './partials/dashNavbar'
export default {
  middleware: ['auth'],
  components: {
    dashNavbar
  },
  data () {
    return {
      fixed: false,
    }
  }
}
</script>

