<template>
  <v-app>
    <navbar :MainNav="MainNav" v-on:expandToggle="expandToggle" />
    <Drawer :MainNav="MainNav" :expanded="expanded" />

    <v-content class="darkest--text white">
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-content>
    <estimate />
    <mfooter />
  </v-app>
</template>

<script>
import navbar from "./partials/navbar";
import Drawer from "@/components/Drawer";
import estimate from "./partials/estimate";
import mfooter from "./partials/mfooter";
export default {
  components: {
    navbar,
    Drawer,
    estimate,
    mfooter
  },
  data() {
    return {
      expanded: false,
      MainNav: [
        { title: "About", link: "/about", children: [] },
        {
          title: "Services",
          link: "",
          children: [
            {
              title: "Branding & Identity Design",
              link: "services/branding-identity-design"
            },
            { title: "Web & Mobile Development", link: "" },
            { title: "Digital Marketing", link: "" },
            { title: "SEO", link: "" }
          ]
        },
        { title: "Contact", link: "", children: [] },
        { title: "Dashboard", link: "/dashboard", children: [] }
      ]
    };
  },
  methods: {
    expandToggle() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

