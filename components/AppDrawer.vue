<template >
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app permanent>
    <v-list-item class="drawer-head primary darken-2 text--white" dark>
      <v-list-item-avatar>
        <v-app-bar-nav-icon v-if="mini"></v-app-bar-nav-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <nuxt-link to="/">
          <v-img width="70" src="/everbrand-logo-dark.svg" alt="Everbrand" nuxt to="/" />
        </nuxt-link>
      </v-list-item-content>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="medGrey--text"
        :to="item.url"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: ["bladi", "blah"],
      drawer: true,
      items: [
        { title: "Overview", icon: "mdi-home-city", url: "/dashboard" },
        { title: "Metrics", icon: "mdi-chart-areaspline", url: "" },
        { title: "Hosting", icon: "mdi-server", url: "" },
        {
          title: "Projects",
          icon: "mdi-worker",
          url:
            "/dashboard/projects" /* make a subgroup including active and past projects? */
        },
        { title: "Files", icon: "mdi-file-multiple", url: "" },
        { title: "Chat", icon: "mdi-forum", url: "" },
        { title: "Quotes", icon: "mdi-cash-usd", url: "" }
      ],
      mini: false
    };
  }
};
</script>

<style scoped>
.drawer-head {
  height: 65px;
}
</style>
