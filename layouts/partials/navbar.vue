    <template>
  <v-app-bar fixed flat app height="70" :class="[ scrolled ? 'white elevation-4' : 'transparent']">
    <v-container class="pa-0 d-flex">
      <nuxt-link to="/">
        <v-toolbar-title v-if="$vuetify.breakpoint.smAndDown || !isHome">
          <img
            width="85"
            :src="[!scrolled ? require('@/static/everbrand-logo-dark.svg') : require('@/static/everbrand-logo.svg')]"
            alt="Everbrand"
          />
        </v-toolbar-title>
        <v-toolbar-title v-if="$vuetify.breakpoint.mdAndUp && isHome">
          <v-img width="85" src="/everbrand-logo.svg" alt="Everbrand" />
        </v-toolbar-title>
      </nuxt-link>

      <v-spacer />

      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-menu
          v-for="(TopItem, index) in MainNav"
          :key="index"
          openOnHover
          closeOnClick
          closeOnContentClick
          offsetY
        >
          <template v-slot:activator="{ on }">
            <v-btn
              :to="TopItem.link"
              :class="[!scrolled ? 'white--text' : 'darkest--text']"
              class="text-capitalize"
              text
              nuxt
              v-on="on"
            >{{ TopItem.title }}</v-btn>
          </template>
          <v-list v-if="TopItem.children[0]">
            <v-list-item v-for="(child, index) in TopItem.children" :key="index" :to="child.link">
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          text
          nuxt
          to="/quote"
          :class="[ !scrolled ? 'secondary--text' : 'primary--text']"
          class="text-capitalize"
        >Quote</v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xsOnly"
        :class="[!scrolled ? 'white--text' : 'darkest--text']"
        @click.stop="$emit('expandToggle')"
      />
    </v-container>
  </v-app-bar>
</template>

    <script>
export default {
  props: ["MainNav"],
  data() {
    return {
      logoAlt: "Everbrand",
      scrolled: false
    };
  },
  computed: {
    isHome: function() {
      if (this.$route.path == "/") {
        return true;
      }
      return false;
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
  mounted: function() {
    this.loaded = true;
    // handle scroll for nav
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
