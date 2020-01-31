<template>
  <v-container>
    <h1 class="mb-5">Projects</h1>

    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" md="6">
        <v-card elevation="2" class="mb-5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">IN PROGRESS</div>
              <v-list-item-title class="headline">{{ project.name}}</v-list-item-title>
              <!-- <v-list-item-subtitle>{{ project.desc }}</v-list-item-subtitle> -->
            </v-list-item-content>

            <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
          </v-list-item>

          <v-card-actions>
            <v-btn :to="'projects/' + project.trello_id" text>Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-card max-width="344" elevation="2" class="mb-5">
      <v-list-item three-line>
        <v-list-item-content>
          <v-card class="info pa-1 overline" dark>
            <div class="mb-4">COMPLETED</div>
          </v-card>

          <v-list-item-title class="headline mb-1">{{ project.name}}</v-list-item-title>
          <v-list-item-subtitle>{{ project.desc }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Details</v-btn>
      </v-card-actions>
    </v-card>-->
  </v-container>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      projects: []
    };
  },
  async asyncData({ $axios, query }) {
    let data = await $axios.$get(`/projects`);
    return {
      projects: data.data
    };
  },
  methods: {}
};
</script>
