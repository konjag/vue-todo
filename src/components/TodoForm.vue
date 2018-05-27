<template>
  <form @submit.prevent="addTodo" class="form">
    <input class="form__input" type="text" ref="titleInput" placeholder="Create new Todo">
    <div class="form__button" @click="addTodo">Add</div>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  methods: {
    addTodo() {
      const title = this.$refs.titleInput.value;

      if (!title) return;

      this.$refs.titleInput.value = "";
      this.$store.commit("addTodo", title);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables/breakpoints";
@import "../scss/variables/colors";

.form {
  display: flex;
  flex-wrap: wrap;

  &__input {
    background: none;
    border: none;
    color: $color-text;
    font-style: italic;
    font-size: 22px;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: $breakpoint-md) {
      width: 100%;
    }
  }

  &__button {
    cursor: pointer;
    font-size: 18px;
    padding: 3px 15px;
    background-color: $color-success;
    color: $color-background;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: $breakpoint-md) {
      width: 100%;
      margin-left: 0;
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
