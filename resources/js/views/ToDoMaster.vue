<template>
    <div class="container">
        <to-do-form></to-do-form>
        <to-do-card
            v-for="todoItem in todoItems"
            v-bind:key="todoItem.id"
            v-bind:title="todoItem.title"
            v-bind:notes="todoItem.notes"
        ></to-do-card>
    </div>
</template>

<script>
export default {
    data: function() {
        return {};
    },
    computed: {
        todoItems: function() {
            console.log("compute call");
            return this.$store.state.todoItems;
        }
    },
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
