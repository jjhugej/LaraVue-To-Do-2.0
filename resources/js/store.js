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
        },
        //TODO: STATE IS NOT REACTIVE WHEN INPUTTING NEW TODO ITEM
        todoItems: []
    },
    mutations: {
        setInitialTodoItems(state, todoItem) {
            state.todoItems.push(todoItem);
        },
        setNewTodoItem(state, todoItem) {
            state.todoItems.push(todoItem);
        },
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
    },
    getters: {
        getTodoItems: state => {
            return state.todoItems;
        }
    }
});

export default store;
