<template>
    <div class="container">
        <to-do-form></to-do-form>
        <to-do-card
            v-for="todoItem in todoItems"
            v-bind:key="todoItem.id"
            v-bind:id="todoItem.id"
            v-bind:title="todoItem.title"
            v-bind:notes="todoItem.notes"
        ></to-do-card>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            //todoItems: []
        };
    },
    computed: {
        todoItems: function() {
            return this.$store.getters.getTodoItems;
        }
    },
    /* watch: {
        todoItems() {
            console.log("todoItems changed");
            return this.todoItems;
        }
    }, */
    mounted() {
        //retrieve all todoitems on mount and push to array
        axios
            .get("todoitem")
            .then(response => {
                response.data.forEach(todoItem => {
                    //push todoitems to vuex store
                    this.$store.commit("setInitialTodoItems", todoItem);
                });
            })
            .catch(errors => console.log(errors));
    }
};
</script>
