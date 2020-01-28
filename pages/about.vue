<template>
  <div>
    <Cover :cover="cover" />
    <section class="body">
      <v-container class="text-left">
        <v-responsive class="mx-auto overflow-visible" max-width="1024">
          <v-row class="py-5">
            <v-col cols="12" md="5">
              <h3 class="display-1 mb-4">Nationally Distributed Remote Agency</h3>
              <p
                class="body-1 medGrey--text"
              >100% remote happy employees, translates to cheaper costs, happy clients. Held accountability for productivity not visibility sadipscing elitr, sed diam nonumy eirmod.</p>
              <p
                class="body-1 medGrey--text"
              >Las Vegas, NV Los Angeles, CA, Southington, CT et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </v-col>
            <v-col cols="12" md="7">
              <v-img src="/us-nodes-map.png" max-width="450" rounded class="mx-auto panel" />
            </v-col>
          </v-row>

          <v-row class="py-5">
            <v-col cols="12" md="7">
              <v-img src="/jacob-headshot-sm.png" max-width="250" rounded class="mx-auto panel" />
            </v-col>
            <v-col cols="12" md="5">
              <h3 class="display-1 mb-4">Organizer &amp; Developer</h3>
              <p
                class="body-1 medGrey--text"
              >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <p
                class="body-1 medGrey--text"
              >At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </v-col>
          </v-row>

          <v-divider class="my-5"></v-divider>

          <v-row>
            <v-col cols="12" md="8" class="mx-auto text-center">
              <h3 class="display-2 mb-5">Philosophy</h3>
              <p
                class="body-1 medGrey--text"
              >The goal of everbrand is maximize value and minimize pain points commonly associated with traditional web agencies. We aim to achieve this with:</p>
              <ul class="body-1 unstyled medGrey--text">
                <li class="text-capitalize mb-2">
                  <v-icon class="green--text" small>mdi-check</v-icon>&nbsp;modern design &amp; development methodologies
                </li>
                <li class="text-capitalize mb-2">
                  <v-icon class="green--text" small>mdi-check</v-icon>&nbsp;Build for Scale &amp; longevity
                </li>
                <li class="text-capitalize mb-2">
                  <v-icon class="green--text" small>mdi-check</v-icon>&nbsp;easy communication
                </li>
                <li class="text-capitalize mb-2">
                  <v-icon class="green--text" small>mdi-check</v-icon>&nbsp;convenient experience
                </li>

                <li class="text-capitalize">
                  <v-icon class="green--text" small>mdi-check</v-icon>&nbsp;Low operating costs
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
      <v-img src="/cover-wave.svg" class="wave-frame" />
    </section>
  </div>
</template>

<script>
import Cover from "@/components/Cover";
export default {
  components: {
    Cover
  },
  data() {
    return {
      cover: {
        header: "About",
        subtitle:
          "Everbrand is a technology focused web agency that makes modern design & development methodologies accessible to small and midsized businesses.",
        graphic: "/startup_1.svg"
      }
    };
  }
};
</script>

<style scoped>
</style>
