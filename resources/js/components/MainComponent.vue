<template>
  <div class="container">
    <!-- <test-component></test-component> -->
    <router-view></router-view>
    <alert-message id="alert-message" v-if="showAlertMessage"></alert-message>
  </div>
</template>

<script>
export default {
  computed: {
    showAlertMessage: function () {
      return this.$store.state.message.show;
    },
  },
};
</script>

<style scoped>
#alert-message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  min-height: 20vh;
  min-width: 20vw;
}
</style>
