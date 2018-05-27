<template>
  <div
    class="todo"
    :class="{ 'todo--completed': isCompleted, 'todo--editing': editing }"
  >
    <form @submit.prevent="updateTodo" class="todo__form">
      <div class="todo__title">{{ title }}</div>
      <div class="todo__input-container">
        <input
          class="todo__input"
          type="text"
          ref="titleInput"
          :value="title"
        >
      </div>
    </form>
    <div class="todo__options options">
      <div 
        class="options__button options__button--complete" 
        @click="completeTodo"
        v-if="!isCompleted"
      >Complete</div>
      <div 
        class="options__button" 
        @click="startTodo"
        v-if="isCompleted"
      >Start</div>    
      <div class="options__button" @click="editTodo">Edit</div>    
      <div 
        class="options__button options__button--delete" 
        @click="deleteTodo"
      >Delete</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    id: {
      type: Number,
      isRequired: true
    },
    title: {
      type: String,
      isRequired: true
    },
    isCompleted: {
      type: Boolean,
      isRequired: true
    }
  },
  data() {
    return {
      editing: false
    };
  },
  methods: {
    completeTodo() {
      this.$store.commit("completeTodo", this.id);
    },
    startTodo() {
      this.$store.commit("startTodo", this.id);
    },
    editTodo() {
      this.editing = true;
      this.$refs.titleInput.focus();
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.id);
    },
    updateTodo() {
      this.$store.commit("updateTodo", {
        id: this.id,
        title: this.$refs.titleInput.value
      });
      this.editing = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables/breakpoints";
@import "../scss/variables/colors";

.todo {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid $color-border;

  &--completed {
    .todo__title {
      text-decoration: line-through;
      color: $color-text-completed;
    }
  }

  &--editing {
    .todo {
      &__title {
        display: none;
      }

      &__input-container {
        width: auto;
        overflow: auto;
      }
    }
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__input-container {
    width: 0;
    overflow: hidden;
  }

  &__input {
    font-size: 22px;
    background: none;
    border: none;
    padding: 0;
    color: $color-text;
    font-style: italic;

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: $breakpoint-md) {
    flex-wrap: wrap;
  }
}

.options {
  display: flex;
  margin-left: auto;

  &__button {
    cursor: pointer;
    font-size: 18px;
    padding: 3px 15px;
    background-color: $color-neutral;
    color: $color-background;
    border-radius: 5px;
    margin-left: 10px;

    &--complete {
      background-color: $color-success;
    }

    &--delete {
      background-color: $color-warning;
    }

    &:hover {
      opacity: 0.8;
    }

    &:first-child {
      @media screen and (max-width: $breakpoint-md) {
        margin-left: 0;
      }
    }
  }

  @media screen and (max-width: $breakpoint-md) {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
