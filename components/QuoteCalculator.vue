<template>
  <div class="quote-calculator">
    <v-row wrap>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="display-1">Get a Quote</h3>
          </v-card-title>

          <v-card-text class="text-xs-left">
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <v-select
                  v-model="projectType"
                  :items="items"
                  menu-props="auto"
                  label="Design Type"
                  hide-details
                  outlined
                  dense
                ></v-select>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  class="pl-sm-5"
                  label="Number of Pages"
                  placeholder="How many pages?"
                  v-model="pageAmount"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-list>
              <v-list-item v-for="product in products" :key="product.title">
                <v-checkbox
                  v-model="selectedProducts"
                  :label="product.title + '- ' + product.description"
                  :value="product"
                  class="my-0"
                ></v-checkbox>
              </v-list-item>
            </v-list>

          <p>
            Estimated Total: ${{ total.toString() }} to ${{ total + 600 }}
          </p>

          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn large color="primary" v-on="on">
                <small>Let's Do It</small>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-sm-center">
                <span class="display-1">
                  <strong>
                    <span class="primary--text">Awesome!</span> We look forward to working with you.
                  </strong>
                </span>
              </v-card-title>
              <v-card-text>
                <p class>
                  Let's get started on your {{ projectType.toLowerCase() }} {{ pageAmount }}-page website! We just need some contact information. We will review your quote and get back to you ASAP!
                  <br />
                  <em>Need to talk? Feel free to contact us at (559) 310-7834.</em>
                </p>
                <v-container grid-list-md>
                  <v-row wrap>
                    <v-flex xs12 sm6>
                      <v-text-field label="First name*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field label="Last name" persistent-hint></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Email*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field
                        return-masked-value
                        placeholder="Phone Number"
                        mask="(###) ###-####"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-combobox
                        :items="sortedIndustries"
                        label="Industry"
                        hint="What best descirbes your industry?"
                      ></v-combobox>
                    </v-flex>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                <v-btn color="primary" text @click="dialog = false">Submit Request</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          </v-card-text>

        </v-card>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "QuoteCalculator",
  data() {
    return {
      selectedProducts: [],
      products: [
        {
          title: "Creatives",
          price: 400,
          description: "lorem ipsum creatives"
        },
        { title: "Blog", price: 320, description: "lorem ipsum blog" },
        { title: "Mobile App", price: 2460, description: "lorem ipsum app" },
        { title: "On-Page SEO", price: 280, description: "lorem ipsum app" },
        {
          title: "Backlink Building",
          price: 360,
          description: "lorem ipsum app"
        }
      ],
      projectType: "Custom Design",
      items: ["Custom Design", "Template"],
      pageAmount: 5,
      dialog: false,
      industries: [
        "Ecommerce",
        "Legal",
        "Corporate",
        "Education",
        "Mobile & Web Application",
        "Real Estate",
        "Cafe, Bar & Restaurant",
        "Medical",
        "Music",
        "Automotive",
        "News",
        "Beauty & Cosmetics",
        "Art & Design",
        "Theatre",
        "Radio & Podcasts",
        "Dance",
        "Television",
        "Photography",
        "Film/Video",
        "Event Planning",
        "Non-profit",
        "Retail",
        "Business & Finance",
        "Environmental",
        "Reference or Directory",
        "Winery & Vineyard",
        "Architecture",
        "Charity",
        "Historical",
        "Books & Literature",
        "Fashion",
        "Furniture",
        "Games",
        "Government",
        "Health & Fitness",
        "Homeware",
        "Politics",
        "Printing & Stationary",
        "Publishing",
        "Copywriting",
        "Marketing & Branding",
        "Religion",
        "Science",
        "Sports",
        "Technology",
        "Travel",
        "T-shirts",
        "Typography",
        "Wedding",
        "Writing",
        "Social Networking",
        "Other"
      ]
    };
  },
  computed: {
    total: function() {
      let sum = 0;
      let type = 0;
      let pageCost = 0;

      for (let i = 0; i < this.selectedProducts.length; i++) {
        sum += parseFloat(this.selectedProducts[i].price);
      }
      if (this.projectType == "Custom Design") {
        type = 840;
        pageCost = 300;
      } else if (this.projectType == "Template") {
        type = 380;
        pageCost = 120;
      }
      return sum + type + pageCost * this.pageAmount;
    },
    sortedIndustries: function() {
      var inds = this.industries;
      return inds.sort();
    }
  }
};
</script>
