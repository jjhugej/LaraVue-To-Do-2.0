<template>
  <div class="container">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-5-desktop is-5-widescreen">
              <form v-on:submit.prevent action class="box">
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
                  <p class="has-text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
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
                  <p class="has-text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                </div>
                <div class="field">
                  <label for class="checkbox">
                    <input type="checkbox" v-model="formData.remember" />
                    Remember me
                  </label>
                </div>
                <div class="field">
                  <button @click="submitLoginForm" class="button is-success">Login</button>
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
        email: "",
        password: "",
        remember: false,
      },
      errors: {},
    };
  },
  methods: {
    submitLoginForm: function () {
      //console.log(this.formData);
      this.errors = {};
      axios.get("/sanctum/csrf-cookie").then(() => {
        axios
          .post("/login", this.formData)
          .then((response) => {
            console.log("logged in");
            axios
              .get("/user")
              .then((response) => {
                this.$store.commit("setLoggedInUser", response.data);
                this.$router.push("/");
              })
              .catch((errors) => console.log(errors));
          })
          .catch((errors) => {
            console.log(errors.response.data.errors);
            this.errors = errors.response.data.errors;
          });
      });
    },
  },
  mounted: function () {},
};
</script>
<style scoped></style>
