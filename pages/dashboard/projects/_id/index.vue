<template>
  <div>
    <h2>This project's id is {{ $route.params.id }}</h2>

    <ActivityFeed :project="project" />
  </div>
</template>

<script>
import ActivityFeed from "@/components/projects/ActivityFeed";
export default {
  layout: "dashboard",
  components: { ActivityFeed },
  // validate({ params }) {
  //   return /^\d+$/.test(params.id);
  // },
  data() {
    return {
      project: {
        id: "",
        name: "",
        desc: "",
        url: "",
        tasks: []
      }
    };
  },
  async asyncData({ $axios, params }) {
    let data = await $axios.$get(`/projects/` + params.id);
    return {
      project: {
        desc: data.desc,
        id: data.id,
        name: data.name,
        tasks: data.tasks,
        url: data.url
      }
    };
  },
  methods: {
    transformDate() {
      this.project.tasks.forEach(task => {
        if (task.due == null) {
          task.dueDiff = null;
        } else {
          const oneDay = 24 * 60 * 60 * 1000;
          const today = new Date();
          let newDate = new Date(task.due);
          const diffDays = Math.round(Math.abs((today - newDate) / oneDay));

          let dateString = String(newDate);
          task.due = dateString.slice(0, 15);
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
        task.progress = (checked / checkItems) * 100;
        if (task.progress === 100) {
          task.dueComplete = true;
        } else if (isNaN(task.progress)) {
          task.progress = 0;
        }

        if (task.dueComplete) {
          task.progress = 100;
          task.dueDiff = Number.MIN_SAFE_INTEGER;
        }
      });
    }
  },
  beforeMount() {
    this.transformDate();
    this.calcProgress();
  }
};
</script>

<style scoped>
</style>



