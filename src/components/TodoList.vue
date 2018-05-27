<template>
  <div class="todo-list">
    <todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :id="index"
      :title="todo.title"
      :is-completed="todo.isCompleted"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
