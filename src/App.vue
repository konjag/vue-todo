<template>
  <div id="app">
    <h1>Todo App</h1>
    <todo-form />
    <stats />
    <todo-list />
  </div>
</template>

<script>
import Stats from "./components/Stats";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default {
  name: "app",
  components: {
    Stats,
    TodoList,
    TodoForm
  }
};
</script>

<style lang="scss">
@import "scss/variables/colors";

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: $color-background;
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text;
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  padding: 10px;
  margin-bottom: 100px;
}

h1 {
  text-align: center;
  margin-bottom: 80px;
}
</style>
