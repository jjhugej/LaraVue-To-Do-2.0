<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-5-desktop is-5-widescreen">
              <form v-on:submit.prevent action class="box">
                <div class="field">
                  <label for class="label">Name</label>
                  <div class="control">
                    <input
                      v-model="formData.name"
                      type="text"
                      placeholder="Bob Smith"
                      class="input"
                      required
                    />
                  </div>
                  <p class="has-text-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
                </div>
                <div class="field">
                  <label for class="label">Email</label>
                  <div class="control">
                    <input
                      v-model="formData.email"
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      class="input"
                      required
                    />
                  </div>
                  <p class="has-text-danger" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
                </div>
                <div class="field">
                  <label for class="label">Password</label>
                  <div class="control">
                    <input
                      v-model="formData.password"
                      type="password"
                      placeholder="*******"
                      class="input"
                      required
                    />
                  </div>
                  <p class="has-text-danger" v-if="errors.password">
                    {{ errors.password[0] }}
                  </p>
                </div>
                <div class="field">
                  <label for class="label">Confirm Password</label>
                  <div class="control">
                    <input
                      v-model="formData.password_confirmation"
                      type="password"
                      placeholder="*******"
                      class="input"
                      required
                    />
                  </div>
                  <p
                    class="has-text-danger"
                    v-if="errors.password_confirmation"
                  >
                    {{ errors.password_confirmation[0] }}
                  </p>
                </div>
                <div class="field">
                  <button
                    @click="submitRegistrationForm"
                    class="button is-success"
                  >
                    Register
                  </button>
                </div>
                <div class="field">
                  <router-link to="/login"
                    >Have an account? Login here!</router-link
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        remember: false,
      },
      errors: {},
    };
  },
  methods: {
    submitRegistrationForm: function () {
      //console.log(this.formData);
      this.errors = {};
      axios
        .post("/register", this.formData)
        .then((response) => {
          this.$store.commit("setLoggedInUser", response.data);
          this.$router.push("/");
        })
        .catch((errors) => console.log(errors));
    },
    mounted: function () {},
  },
};
</script>
<style scoped></style>
