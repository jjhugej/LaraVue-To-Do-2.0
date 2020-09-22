import VueRouter from "vue-router";

const routes = [
    { path: "/login", component: require("./views/Login.vue").default }
];

const router = new VueRouter({
    routes
});

export default router;
