import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, title) {
      state.todos.push({
        title: title,
        isCompleted: false
      });
    },
    completeTodo(state, id) {
      state.todos[id].isCompleted = true;
    },
    startTodo(state, id) {
      state.todos[id].isCompleted = false;
    },
    deleteTodo(state, id) {
      state.todos.splice(id, 1);
    },
    updateTodo(state, todo) {
      state.todos[todo.id].title = todo.title;
    }
  },
  actions: {}
});
