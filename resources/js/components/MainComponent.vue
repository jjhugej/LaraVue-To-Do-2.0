<template>
  <div class="container">
    <!-- <test-component></test-component> -->
    <transition name="routerTransition">
      <router-view></router-view>
    </transition>
    <transition name="alertTransition">
      <alert-message id="alert-message" v-if="showAlertMessage"></alert-message>
    </transition>
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
.alertTransition-enter-active,
.alertTransition-leave-active {
  transition: opacity 1.5s;
}
.alertTransition-enter,
.alertTransition-leave-to {
  opacity: 0;
}
.routerTransition-enter-active,
.routerTransition-leave-active {
  transition: opacity 0.7s;
}
.routerTransition-enter,
.routerTransition-leave-to {
  opacity: 0;
}
</style>
