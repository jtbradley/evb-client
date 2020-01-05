<template>
  <v-app-bar class="primary" height="65" fixed flat app>
    <v-spacer />

    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">

      <v-menu v-if="authenticated" openOnHover closeOnClick closeOnContentClick offsetY>

        <template v-slot:activator="{ on }">
          <v-btn class="white--text text-capitalize" text v-on="on">{{ user.name }}</v-btn>
        </template>

        <v-list>
          <v-list-item @click.prevent="">
            <v-list-item-title>
              Profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click.prevent="logout">
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>

    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      logoAlt: "Everbrand",
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>
