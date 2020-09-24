<template>
    <div class="container">
        <h1>What do you need to do today?</h1>
        <div class="field">
            <div class="control is-expanded">
                <h2>Title:</h2>
                <input
                    name="title"
                    class="input"
                    type="text"
                    placeholder="Go To The Grocery Store"
                    v-model="formData.title"
                />
            </div>
            <div class="control is-expanded">
                <h2>Notes:</h2>
                <textarea
                    name="notes"
                    class="textarea"
                    type="textarea"
                    rows="3"
                    placeholder="Get bread, cookies, and milk"
                    v-model="formData.notes"
                />
            </div>
            <div class="control">
                <a @click="submitTodoForm" class="button is-info">Save</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            formData: {
                title: "",
                notes: ""
            }
        };
    },
    methods: {
        submitTodoForm: function() {
            axios
                .post("/todoitem", this.formData)
                .then(response => {
                    //this.$store.commit("setNewTodoItem", response.data);
                    this.$store.commit("setNewTodoItem", response.data);
                    // console.log(response.data);
                })
                .catch(errors => console.log(errors));
        }
    },
    mounted() {}
};
</script>
<style scoped>
.container {
    margin: 20px 0;
}
</style>
