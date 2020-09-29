<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Laravue To-Do</a>
        <a
          v-on:click="toggleNavBarBurger"
          role="button"
          class="navbar-burger burger"
          v-bind:class="{ 'is-active': active }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        v-bind:class="{ 'is-active': active }"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link
                v-if="!isLoggedIn"
                to="/login"
                class="button is-primary"
                >Login</router-link
              >
              <a v-if="isLoggedIn" @click="logoutUser" class="button is-primary"
                >Logout</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: false,
    };
  },
  computed: {
    isLoggedIn: function () {
      if (this.$store.state.user.isLoggedIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    logoutUser: function () {
      axios
        .post("/logout")
        .then((respone) => this.$store.commit("logoutUser"))
        .catch((errors) => console.log(errors));
    },
    toggleNavBarBurger: function () {
      this.active = !this.active;
    },
  },
  mounted: function () {
    if (!this.$store.state.user.isLoggedIn) {
      //user is not set in store, perform quick login check
      axios.post("/login").then((response) => {
        axios
          .get("/user")
          .then((response) =>
            this.$store.commit("setLoggedInUser", response.data)
          );
      });
      /* .catch(errors => console.log(errors)); */
    }
  },
};
</script>
<style scoped></style>
