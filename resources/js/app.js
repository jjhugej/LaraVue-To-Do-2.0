require("./bootstrap");
require("./componentRegistration");

import store from "./store";
import router from "./routes";

const app = new Vue({
    el: "#app",
    store: store,
    router
});
