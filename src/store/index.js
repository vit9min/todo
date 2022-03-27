import { createStore } from 'vuex';
/* import { mapMutations, mapGetters, mapSetters, mapActions } from 'vuex'; */
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    all: [],
    trash: []
  },
  getters: {
    getAllActive(state) {
      return state.all.filter((task) => task.completed === false);
    },
    getAllCompleted(state) {
      return state.all.filter((task) => task.completed === true);
    },
    getAllRemoved: (state) => state.trash
  },
  mutations: {
    TODO_ADD(state, task) {
      console.log('ADD_TODO');
      state.all.push({
        id: uuidv4(),
        task: task,
        isCompleted: false
      });
    },
    TODO_UPDATE_TASK(state, payload) {
      console.log('TODO_UPDATE_TASK');
      const todoId = payload[0];
      const task = payload[1];
      const selectedTodo = state.all.filter((task) => task.id === todoId);
      selectedTodo[0].task = task;
    },
    TODO_TOGGLE_STATUS(state, todoId) {
      console.log('TODO_TOGGLE_STATUS');
      const selectedTodo = state.all.find((task) => task.id === todoId);
      selectedTodo.completed = !selectedTodo.completed;
    },
    TODO_REMOVE(state, todoId) {
      console.log('TODO_REMOVE');
      state.trash.push(state.all.find((task) => task.id === todoId));
      state.all = state.all.filter((task) => task.id !== todoId);
    },
    TODO_REMOVE_ALL(state) {
      console.log('TODO_REMOVE_ALL');
      state.all = state.all.filter((task) => task.completed === false);
    }
  },
  actions: {},
  modules: {}
});
