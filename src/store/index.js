import { createStore } from 'vuex';
/* import { mapMutations, mapGetters, mapSetters, mapActions } from 'vuex'; */
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    all: []
  },
  getters: {
    active(state) {
      return state.all.filter((task) => task.completed === false);
    },
    completed(state) {
      return state.all.filter((task) => task.completed === true);
    }
  },
  mutations: {
    ADD_TODO(state, todoContent) {
      console.log('ADD_TODO');
      state.all.push({
        id: uuidv4(),
        todoContent: todoContent,
        completed: false
      });
    },
    EDIT_TODO_CONTENT(state, payload) {
      console.log('EDIT_TODO_CONTENT');
      const todoId = payload[0];
      const todoContent = payload[1];
      const selectedTodo = state.all.filter((task) => task.id === todoId);
      selectedTodo[0].todoContent = todoContent;
    },
    TOGGLE_COMPLETE_STATUS(state, todoId) {
      console.log('TOGGLE_COMPLETE_STATUS');
      const selectedTodo = state.all.find((task) => task.id === todoId);
      selectedTodo.completed = !selectedTodo.completed;
    },
    DELETE_TODO(state, todoId) {
      console.log('DELETE_TODO');
      state.all = state.all.filter((task) => task.id !== todoId);
    },
    DELETE_ALL_COMPLETED(state) {
      console.log('DELETE_ALL_COMPLETED');
      state.all = state.all.filter((task) => task.completed === false);
    }
  },
  actions: {},
  modules: {}
});
