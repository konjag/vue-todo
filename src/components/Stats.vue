<template>
  <div class="stats">
    <div class="stats__row">
      <div class="stats__label">Completed:</div>
      <div class="stats__counter">{{ completedCount }}</div>
    </div>
    <div class="stats__row">
      <div class="stats__label">In progress:</div>
      <div class="stats__counter">{{ inProgressCount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  computed: {
    completedCount() {
      return this.$store.state.todos.filter(todo => todo.isCompleted).length;
    },
    inProgressCount() {
      return this.$store.state.todos.filter(todo => !todo.isCompleted).length;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables/colors";

.stats {
  font-size: 18px;
  margin-top: 20px;
  padding: 20px 0;
  border-bottom: 1px solid $color-border;
  border-top: 1px solid $color-border;

  &__label,
  &__counter {
    display: inline-block;
  }

  &__counter {
    margin-left: 10px;
  }
}
</style>
