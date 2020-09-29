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
        todoItems: [],
        message: {
            show: false,
            title: "",
            body: "",
            class: ""
        }
    },
    mutations: {
        setInitialTodoItems(state, todoItem) {
            state.todoItems.push(todoItem);
        },
        setNewTodoItem(state, todoItem) {
            state.todoItems.push(todoItem);
        },
        deleteTodoItem(state, todoItemID) {
            const todoItemsArrIndex = state.todoItems
                .map(todoItem => todoItem.id)
                .indexOf(todoItemID);
            state.todoItems.splice(todoItemsArrIndex, 1);
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
            state.todoItems = [];
        },
        displayMessage(state, message) {
            state.message.title = message.title;
            state.message.body = message.body;
            state.message.class = message.class;
            state.message.show = true;
        },
        removeMessage(state) {
            state.message.show = false;
        }
    },
    getters: {
        getTodoItems: state => {
            return state.todoItems;
        }
    },
    actions: {
        fireMessage(context, message) {
            context.commit("displayMessage", message);

            setTimeout(() => {
                context.commit("removeMessage");
            }, 4000);
        },
        removeMessage(context) {
            context.commit("removeMessage");
        }
    }
});

export default store;
