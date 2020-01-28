<template>
  <v-card class="mb-5 pa-5">
    <v-toolbar elevation="0" border="bottom">
      <v-toolbar-title>{{ project.name }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>{{ project.desc }}</v-card-text>

    <v-data-table
      :headers="headers"
      :items="project.tasks"
      :sort-by="['progress']"
      :sort-desc="[true]"
      class="elevation-0"
    >
    <!-- maybe split into separate arrays: current, completed, ignored -->
      <template v-slot:item.dueDiff="{ item }">

        <div v-if="item.dueDiff == null" >
            <span class="overline">No&nbsp;Deadline</span>
        </div>

        <div v-if="!item.dueComplete && item.dueDiff != null">
          <v-chip-group dark>

            <v-chip v-if="!item.overdue" :color="getColor(item.dueDiff)" small pill>{{ item.dueDiff }} Days</v-chip>

            <v-chip v-if="item.overdue" :color="getColor(item.dueDiff)" small pill>{{ Math.abs(item.dueDiff) }} Days Overdue</v-chip>

          </v-chip-group>
          <p class="overline mb-2" >{{ item.due }}</p>
        </div>

        <div v-if="item.dueComplete">
            <span class="medGrey--text overline">&nbsp;Completed</span>
            <v-icon color="green" x-small>mdi-check-bold</v-icon>
        </div>

      </template>

      <template v-slot:item.progress="{ item }">
        <v-progress-linear :color="progressColor(item.progress)" :value="item.progress" buffer-value="0" stream></v-progress-linear>

      </template>

      <template v-slot:item.action="{ item }">
        <v-btn icon x-small>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon x-small>
          <v-icon>mdi-check-bold</v-icon>
        </v-btn>
        <v-btn icon x-small>
          <v-icon>mdi-eye-off</v-icon>
        </v-btn>
        <v-btn icon x-small>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      headers: [
        {
          text: "Task",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Deadline", value: "dueDiff" },
        { text: "Progress", value: "progress" },
        { text: "Action", sortable: false, value: "action" }
      ],
      hover: false
    };
  },
  computed: {},
  methods: {
    getColor(deadline) {
      if (deadline > 14) return "green";
      else if (deadline > 7) return "orange";
      else if (deadline > -1) return "red";
      else return "darkest";
    },
    progressColor(progress){
      if(progress === 100) return "green";
      else return "primary";
    }
  }
};
</script>
