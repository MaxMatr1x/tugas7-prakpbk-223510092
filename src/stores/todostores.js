import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done;
    }
  },
  getters: {
    incompleteTodosCount: (state) => {
      return state.todos.filter(todo => !todo.done).length;
    },
    completedTodosCount: (state) => {
      return state.todos.filter(todo => todo.done).length;
    },
    totalTodosCount: (state) => {
      return state.todos.length;
    }
  }
});
