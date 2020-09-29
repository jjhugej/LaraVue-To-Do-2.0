import Vue from "vue";

//Main Component (loads router-view)
Vue.component(
    "main-component",
    require("./components/MainComponent.vue").default
);

//NavBar Component
Vue.component("nav-bar", require("./components/NavBar.vue").default);

//To-Do List Components
Vue.component(
    "to-do-form",
    require("./components/toDoListMain/toDoForm.vue").default
);
Vue.component(
    "to-do-card",
    require("./components/toDoListMain/toDoCard.vue").default
);
Vue.component(
    "alert-message",
    require("./components/AlertMessage.vue").default
);
