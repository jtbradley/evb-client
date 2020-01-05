<template>
  <v-row class="cover-content">
    <v-col cols="12" sm="8" md="6" lg="4" xl="3" class="mx-auto">

      <v-card class="mt-5">
        <v-card-title class="display-1">Login</v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="form.valid" lazy-validation>


            <v-text-field
              v-model.trim="form.email"
              label="E-mail"
              type="email"
              :rules="form.emailRules"
              :error-messages="errors.email"
              required
              outlined
              dense
            >
            </v-text-field>

            <v-text-field
              v-model.trim="form.password"
              :rules="form.passwordRules"
              :error-messages="errors.password"
              label="Password"
              type="password"
              required
              outlined
              dense
            >
            </v-text-field>

            <!-- <v-checkbox
              v-model="form.checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox> -->
          <v-btn
            :disabled="!form.valid"
            color="primary"
            form="form"
            @click.prevent="onSubmit"
            width="100%"
            nuxt
          >Login</v-btn>

          </v-form>
        </v-card-text>

        <v-card-subtitle>
          Need an account?
          <nuxt-link to="/register">Register</nuxt-link>
        </v-card-subtitle>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "auth",
  middleware: ['guest'],
  data: () => ({
    form: {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be at least 6 characters"
      ]
    }
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async onSubmit() {
      await this.$auth
        .loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        .then(response => {
          this.$router.push({
            path: this.$route.query.redirect || "/dashboard"
          });
        })
        .catch(error => {
          console.log(error.response);
          this.$router.push("/login");
          //this.resetValidation();
        });
    }
  }
};
</script>
