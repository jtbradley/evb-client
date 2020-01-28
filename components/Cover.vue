<template>
  <section class="cover gradient white--text pb-5">
    <v-container class="text-center pb-5 cover-content">
      <v-responsive class="mx-auto overflow-visible" max-width="1024">
        <v-col cols="12" sm="8" class="mx-auto">
          <h1
            :class="[ $vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-3']"
            class="mb-5"
          >{{ cover.header }}</h1>
          <p class="subtitle-1">{{ cover.subtitle }}</p>
        </v-col>
      </v-responsive>
    </v-container>
    <v-img :src="cover.graphic" class="cover-graphic mx-auto mx-md-0" />
    <v-img src="/cover-wave.svg" class="wave-frame" />
  </section>
</template>

<script>
export default {
  props: ["cover"]
};
</script>

<style scoped>
section.cover {
  margin-top: -140px;
  padding-top: 70px !important;
  padding-bottom: 70px !important;
  position: relative;
}

.cover-graphic {
  width: 300px;
  opacity: 0.4;
  position: absolute;
  bottom: 30px;
  right: 0;
  left: 0;
}

.wave-frame {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
}

.cover-content {
  z-index: 1;
  position: relative;
}

@media screen and (min-width: 960px) {
  .cover-graphic {
    width: 300px;
    opacity: 1;
    bottom: 0;
    right: 0;
    left: auto;
  }
}
</style>
