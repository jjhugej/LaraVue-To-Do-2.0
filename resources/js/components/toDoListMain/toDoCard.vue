<template>
    <div class="container">
        <article class="message">
            <div class="message-header">
                <p>{{ title }}</p>
                <button
                    @click="deleteTodoItem"
                    class="delete"
                    aria-label="delete"
                ></button>
            </div>
            <div class="message-body">{{ notes }}</div>
        </article>
    </div>
</template>

<script>
export default {
    props: ["id", "title", "notes"],
    data: function() {
        return {};
    },
    methods: {
        deleteTodoItem: function() {
            axios
                .delete("/todoitem/" + this.id)
                .then(response => console.log(response))
                .catch(error => console.log(error));
            this.$store.commit("deleteTodoItem", this.id);
        }
    },
    mounted() {}
};
</script>
