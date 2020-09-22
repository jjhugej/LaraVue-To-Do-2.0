import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            userID: null,
            usersName: "",
            usersEmail: "",
            isLoggedIn: false
        }
    },
    mutations: {
        setLoggedInUser(state, user) {
            state.user.userID = user.id;
            state.user.usersName = user.name;
            state.user.usersEmail = user.email;
            state.user.isLoggedIn = true;
        },
        logoutUser(state) {
            state.user.userID = null;
            state.user.usersName = "";
            state.user.usersEmail = "";
            state.user.isLoggedIn = false;
        }
    }
});

export default store;

/*
    this code is used for testing the store
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
}); */
