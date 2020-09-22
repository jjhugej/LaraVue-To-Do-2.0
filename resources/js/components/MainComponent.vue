<template>
    <div class="container">
        <!-- <test-component></test-component> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    beforeCreate() {
        /* axios
      .get("/api/user")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
    },
    mounted() {
        console.log("Main component mounted.");
    }
};
</script>

<style scoped></style>
