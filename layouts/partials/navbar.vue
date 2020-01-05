    <template>
    <div>
    <v-app-bar fixed flat app height="70" :class="[ scrolled ? 'white elevation-4' : 'transparent']">

      <nuxt-link to="/" >
        <v-toolbar-title>
          <v-img width="105" class="ml-5" src="/everbrand-logo.svg" alt="Everbrand" />
        </v-toolbar-title>
      </nuxt-link>

      <v-spacer />

      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">

        <v-menu v-for="(TopItem, index) in MainNav" :key="index"  openOnHover closeOnClick closeOnContentClick offsetY >
      <template v-slot:activator="{ on }">
        <v-btn :to="TopItem.link" :class="[!scrolled && isHome ? 'white--text' : 'darkest--text']"  class="text-capitalize" text nuxt v-on="on">
          {{ TopItem.title }}
        </v-btn>
      </template>
      <v-list v-if="TopItem.children[0]">
        <v-list-item @click="" v-for="(child, index) in TopItem.children" :key="index">
          <v-list-item-title :to="child.link" >{{ child.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

        <v-btn text nuxt to='/quote' :class="[ !scrolled && isHome ? 'secondary--text' : 'primary--text']" class="text-capitalize">Quote</v-btn>

      </v-toolbar-items>

      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" />

    </v-app-bar>

    </div>
    </template>

    <script>
export default {
  data () {
    return {
      logoAlt: 'Everbrand',
      MainNav: [
        {title:'Who', children: []},
        {title:'How', link:'',
          children: [
            {title:'Branding & Identity Design', link: ''},
            {title:'Web & Mobile Development', link: ''},
            {title:'Digital Marketing', link: ''},
            {title:'SEO', link: ''}
            ]},
        {title:'Contact',link: '', children: []},
        {title:'Dashboard',link: '/dashboard', children: []},
      ],
      scrolled: false,
    }
  },
  computed: {
      isHome: function() {
        if (this.$route.path == '/') {
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
}
</script>
