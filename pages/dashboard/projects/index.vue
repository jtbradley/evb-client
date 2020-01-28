<template>
  <v-container>
    <h1 class="mb-5">Projects</h1>

    <ActivityFeed :project="project" />

    <v-card
    elevation="2"
    class="mb-5"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">IN PROGRESS</div>
        <v-list-item-title class="headline mb-4">{{ project.name}}</v-list-item-title>
        <v-list-item-subtitle>{{ project.desc }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Details</v-btn>
    </v-card-actions>
  </v-card>

      <v-card
    max-width="344"
    elevation="2"
    class="mb-5"
  >
    <v-list-item three-line>
      <v-list-item-content>

            <v-card class="info pa-1 overline" dark>
              <div class=" mb-4">COMPLETED</div>
            </v-card>

        <v-list-item-title class="headline mb-1">{{ project.name}}</v-list-item-title>
        <v-list-item-subtitle>{{ project.desc }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Details</v-btn>
    </v-card-actions>
  </v-card>

  </v-container>
</template>

<script>
import ActivityFeed from '@/components/projects/ActivityFeed'
export default {
  layout: "dashboard",
  components: {ActivityFeed},
  data() {
    return {
      project: {
        id: "",
        name: "",
        desc: "",
        url: "",
        tasks: [

        ]
      }
    };
  },
  async asyncData({ $axios, query }) {
    let { data } = await $axios.$get(
      `/projects/5e13608200faba37359184bd`
    );
    return {
      project: {
        desc: data.desc,
        id: data.id,
        name: data.name,
        url: data.url,
        tasks: data.tasks,
      }
    };
  },
  methods: {
    transformDate() {
      this.project.tasks.forEach(task => {

        if(task.due == null) {
          task.dueDiff = null;
        }
        else{

        const oneDay = 24 * 60 * 60 * 1000;
        const today = new Date();
        let newDate = new Date(task.due);
        const diffDays = Math.round(Math.abs((today - newDate) / oneDay));

        let dateString = String(newDate);
        task.due = dateString.slice(0,15);
        task.dueDiff = diffDays;
        task.overdue = false;

        if (newDate < today) {
          task.overdue = true;
          task.dueDiff = -Math.abs(task.dueDiff);
        }
        }

      });
    },
    calcProgress() {
      this.project.tasks.forEach(task => {
          let checkItems = task.checkItems;
          let checked = task.checkItemsChecked;
          task.progress = checked/checkItems * 100;
          if(task.progress === 100 ){
            task.dueComplete = true;
          }
          else if ( isNaN(task.progress) ){
            task.progress = 0;
          }

          if(task.dueComplete ){
            task.progress = 100;
            task.dueDiff = Number.MIN_SAFE_INTEGER;
          }
      });
    },
  },
  beforeMount() {
    this.transformDate();
    this.calcProgress();
  }
};
</script>
