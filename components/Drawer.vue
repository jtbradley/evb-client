<template >
  <v-navigation-drawer v-model="expanded" absolute temporary>
    <v-list-item class="drawer-head primary darken-2 text--white" dark>
      <v-list-item-avatar></v-list-item-avatar>

      <v-list-item-content>
        <nuxt-link to="/">
          <v-img width="70" src="/everbrand-logo-dark.svg" alt="Everbrand" nuxt to="/" />
        </nuxt-link>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <!-- <v-list dense>
      <v-list-item
        v-for="(TopItem, index) in MainNav"
        :key="index"
        class="medGrey--text"
        :to="TopItem.link"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ TopItem.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>-->

    <v-list>
      <v-list-group
        v-for="(TopItem, index) in MainNav"
        :key="index"
        :class="{ childless: !TopItem.children[0] }"
      >
        <template v-slot:activator>
          <v-list-item :to="TopItem.link">
            <v-list-item-content>
              <v-list-item-title v-text="TopItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list-item v-for="child in TopItem.children" :key="child.title" :to="child.link">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["expanded", "MainNav"],
  data() {
    return {
      items: ["bladi", "blah"],
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
      ]
    };
  }
};
</script>

<style scoped>
.drawer-head {
  height: 65px;
}
</style>
