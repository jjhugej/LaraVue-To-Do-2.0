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
        return {
            todoItems: []
        };
    },
    mounted() {
        //retrieve all todoitems on mount and push to array
        axios
            .get("todoitem")
            .then(response => {
                response.data.forEach(todoItem => {
                    this.todoItems.push(todoItem);
                });
            })
            .catch(errors => console.log(errors));
    }
};
</script>
