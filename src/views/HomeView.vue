<template>
  <div id="app">
    <h1>Todo List</h1><br>
    <div class="input-container">
      <input id="todoText" v-model="newTodo.text" @keyup.enter="addNewTodo" placeholder="Add a new task" />
      <input id="todoDate" type="date" v-model="newTodo.date" />
      <button class="add-button" @click="addNewTodo">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Kegiatan</th>
          <th>Tanggal</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" :key="index">
          <td>{{ index + 1 }}</td>
          <td :class="{ done: todo.done }">
            <span>{{ todo.text }}</span>
          </td>
          <td>{{ todo.date }}</td>
          <td>
            <input type="checkbox" v-model="todo.done" @change="toggleTodo(todo)" />
            {{ todo.done ? 'Selesai' : 'Belum selesai' }}
          </td>
          <td>
            <button class="delete-button" @click="removeTodo(index)">
              <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="todolist">
      <p>Tasks Belum Selesai: {{ incompleteTodosCount }} </p>
      <p>Tasks Selesai: {{ completedTodosCount }}</p>
      <p>Task Total: {{ totalTodosCount }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useTodoStore } from '../stores/todostores';

export default {
  setup() {
    const store = useTodoStore();
    const newTodo = ref({
      text: '',
      date: ''
    });

    const addNewTodo = () => {
      if (newTodo.value.text.trim() && newTodo.value.date) {
        store.addTodo({
          text: newTodo.value.text,
          date: newTodo.value.date,
          done: false
        });
        newTodo.value = {
          text: '',
          date: ''
        };
      }
    };

    const removeTodo = (index) => {
      store.removeTodo(index);
    };

    const toggleTodo = (todo) => {
      store.toggleTodo(todo);
    };

    // Menggunakan computed untuk mendapatkan nilai getter dari store
    const incompleteTodosCount = computed(() => store.incompleteTodosCount);
    const completedTodosCount = computed(() => store.completedTodosCount);
    const totalTodosCount = computed(() => store.totalTodosCount);
    const todos = computed(() => store.todos);

    return {
      newTodo,
      addNewTodo,
      removeTodo,
      toggleTodo,
      incompleteTodosCount,
      completedTodosCount,
      totalTodosCount,
      todos
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #eef3f8eb;
  margin-top: 60px;
}

.input-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.input-container input,
.input-container button {
  height: 35px;
}

.done {
  text-decoration: line-through;
}

input[type="checkbox"] {
  margin-right: 5px;
}

input[type="checkbox"]:hover {
  cursor: pointer;
}

input[type="checkbox"]:checked + .done {
  text-decoration: line-through;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1em;
}

.add-button{
  padding: 10px;
  font-size: 1px;
  background-color: rgba(0, 189, 53, 0.722);
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.delete-button{
  padding: 5px;
  font-size: 1px;
  background-color: rgba(181, 51, 51, 0.833);
  margin-left: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
  background-color: rgba(19, 85, 142, 0.518);
}

th,
td {
  border: 1px solid #021522fc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #746697e2;
}
</style>
