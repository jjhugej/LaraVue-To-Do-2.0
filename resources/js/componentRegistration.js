import Vue from "vue";

//Global Vue component registration

/* Vue.component(
    "test-component",
    require("./components/TestComponent.vue").default
); */

Vue.component(
    "main-component",
    require("./components/MainComponent.vue").default
);
Vue.component("nav-bar", require("./components/NavBar.vue").default);
