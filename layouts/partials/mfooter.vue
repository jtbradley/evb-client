<template>
  <v-footer class="pt-5 softGrey">
    <v-container class="medGrey--text text-center text-sm-left pb-0">
      <v-responsive class="mx-auto overflow-visible" max-width="1024">
        <v-row>
          <v-col cols="12" sm="3">
            <h4 class="titlle mb-3">Contact Us</h4>
            <ul class="subtitle-2 unstyled pl-0">
              <li class="mb-3">
                <strong>T:</strong> (559) 310-7834
              </li>
              <li class="mb-3">
                <strong>E:</strong> info@everbrand.co
              </li>
              <li class="mb-3">
                <strong>MA:</strong> N Green Valley Pkwy,
                <br />Henderson, NV 89074
              </li>
            </ul>
          </v-col>

          <v-col cols="12" sm="3">
            <h4 class="titlle mb-3">Services</h4>
            <v-list class="medGrey--text softGrey" flat dense subheader>
              <v-list-item-group>
                <v-list-item
                  v-for="(service, i) in services"
                  :key="i"
                  :to="service.url"
                  class="pl-1"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="service.title" class="medGrey--text subtitle-2"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" sm="3">
            <h4 class="titlle mb-3">Sitemap</h4>
            <v-list class="medGrey--text softGrey" flat dense subheader>
              <v-list-item-group>
                <v-list-item v-for="(page, i) in sitemap" :key="i" :to="page.url" class="pl-1">
                  <v-list-item-content>
                    <v-list-item-title v-text="page.title" class="medGrey--text subtitle-2"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" sm="2">
            <v-img src="/trustpilot.png" class="mt-md-1" />
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="2" md="2">
            <v-img src="everbrand-logo-muted.svg" max-width="80" class="mx-auto mx-sm-0"></v-img>
          </v-col>
          <v-col cols="12" sm="8" class="pt-sm-5">
            <span>&copy; 2019 All Rights Reserved | everbrand.co</span>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Branding & Identity Design",
          url: "services/branding-identity-design"
        },
        { title: "Web & Mobile Development", url: "/" },
        { title: "Digital Marketing", url: "/" },
        { title: "SEO Optimization", url: "/" }
      ],
      sitemap: [
        { title: "About", url: "/about" },
        { title: "Services", url: "/" },
        { title: "Contact", url: "/" },
        { title: "Get a Quote", url: "/" },
        { title: "Dashboard", url: "/" }
      ]
    };
  }
};
</script>
