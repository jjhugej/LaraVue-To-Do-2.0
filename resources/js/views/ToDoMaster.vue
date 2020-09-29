<template>
  <div id="to-do-master" class="container">
    <to-do-form></to-do-form>
    <div id="to-do-list" class="box">
      <p v-if="noTodoItems" class="has-text-centered">
        Your to-do list is empty!
      </p>
      <transition-group name="todoList">
        <to-do-card
          class="to-do-card"
          v-for="todoItem in todoItems"
          v-bind:key="todoItem.id"
          v-bind:id="todoItem.id"
          v-bind:title="todoItem.title"
          v-bind:notes="todoItem.notes"
        ></to-do-card
      ></transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  computed: {
    todoItems: function () {
      return this.$store.getters.getTodoItems;
    },
    noTodoItems: function () {
      let todoArray = this.$store.getters.getTodoItems;

      if (todoArray.length < 1) {
        //if todo array is empty return true(there are no todo items)
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    // if user is logged in retrieve all todoitems on mount and push to array
    axios
      .get("todoitem")
      .then((response) => {
        response.data.forEach((todoItem) => {
          //push todoitems to vuex store
          this.$store.commit("setInitialTodoItems", todoItem);
        });
      })
      .catch((errors) => console.log(errors));
  },
};
</script>
<style scoped>
p {
  font-size: 20px;
  font-weight: 500;
}
#to-do-master {
  margin-bottom: 10vh;
}
#to-do-list {
  border: solid 0.1px rgb(190, 190, 190);
  border-radius: 4px;
  min-height: 30vh;
  padding: 2vh 2vw;
}
.to-do-card {
  margin: 20px 0;
}
.todoList-enter-active,
.todoList-leave-active {
  transition: all 1.5s;
}
.todoList-enter {
  opacity: 0;
  transform: translateY(30px);
}
.todoList-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>