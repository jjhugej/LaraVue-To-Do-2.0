import VueRouter from "vue-router";

const routes = [
    { path: "/", component: require("./views/ToDoMaster.vue").default },
    { path: "/login", component: require("./views/Login.vue").default }
];

const router = new VueRouter({
    routes
});

export default router;
