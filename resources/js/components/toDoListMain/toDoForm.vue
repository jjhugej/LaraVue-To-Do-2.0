<template>
  <div class="container">
    <h1 class="has-text-centered">What do you need to do today?</h1>
    <div class="field">
      <div class="control is-expanded">
        <h2>Title:</h2>
        <input
          name="title"
          class="input"
          type="text"
          placeholder="Go To The Grocery Store"
          v-model="formData.title"
        />
        <p v-if="errors.title" class="has-text-danger">{{ errors.title[0] }}</p>
      </div>
      <div class="control is-expanded">
        <h2>Notes:</h2>
        <textarea
          name="notes"
          class="textarea"
          type="textarea"
          rows="3"
          placeholder="Get bread, cookies, and milk"
          v-model="formData.notes"
        />
      </div>
      <div class="control">
        <a @click="submitTodoForm" class="button is-primary">Save</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      formData: {
        title: "",
        notes: "",
      },
      errors: {},
    };
  },
  methods: {
    submitTodoForm: function () {
      this.errors = {};
      if (this.$store.state.user.isLoggedIn) {
        axios
          .post("/todoitem", this.formData)
          .then((response) => {
            this.$store.commit("setNewTodoItem", response.data);
            this.formData = {};
            this.errors = {};
          })
          .catch((errors) => {
            console.log(errors.response.data.errors);
            this.errors = errors.response.data.errors;
          });
      } else {
        //else the user is not logged in -> redirect to login and fire message.
        this.$store.dispatch("fireMessage", {
          title: "error",
          body: "you must login to continue",
          class: "is-danger",
        });
        this.$router.push("/login");
      }
    },
  },
  mounted() {},
};
</script>
<style scoped>
.container {
  margin: 20px 0;
}
input {
  margin-bottom: 10px;
}
h1 {
  font-size: 26px;
  font-weight: 600;
}
h2 {
  font-weight: 600;
  font-size: 20px;
}
</style>
