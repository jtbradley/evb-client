<template>
  <v-row class="cover-content">
    <v-col ols="12" sm="8" md="6" lg="4" xl="3" class="mx-auto">

      <v-card class="mt-5">
        <v-card-title class="display-1">Register</v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="form.valid" lazy-validation>
            <v-text-field
              v-model="form.name"
              :rules="form.nameRules"
              label="Name"
              type="text"
              required
              autofocus
              outlined
              dense
            >
            </v-text-field>

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

              :error-messages="errors.password"
              label="Password"
              type="password"
              required
              outlined
              dense
            >
            </v-text-field>

          <v-btn
            :disabled="!form.valid"
            color="primary"
            form="form"
            @click.prevent="onSubmit"
            width="100%"
            nuxt
          >Register</v-btn>

          </v-form>
        </v-card-text>

        <v-card-subtitle>
          Already have an account?
          <nuxt-link to="/login">Login</nuxt-link>
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
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 255) || "Name must be less than 255 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be at least 6 characters"
      ],
    }
  }),

  computed: {
    errs() {
      if (errors.email) {
        return errors.email[0];
      }
    },
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async onSubmit() {
      try {
        await this.$axios.$post("register", this.form);
        await this.$auth.loginWith("local", {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        });
        //redirect
        this.$router.push({
          path: this.$route.query.redirect || "/dashboard"
        });
      } catch (err) {
        console.log(err.response);
        this.resetValidation();
      }
    }
  }
};
</script>
