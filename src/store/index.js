import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    all: [
      { id: 1, task: 'Hello World!!!', isCompleted: false },
      { id: 2, task: 'Some text!!!', isCompleted: false },
      { id: 3, task: 'For Sale!!!', isCompleted: false },
      { id: 4, task: 'For Sale completed!!!', isCompleted: true },
      { id: 5, task: 'Lorem Ipsum!!!', isCompleted: true }
    ],
    trash: [
      { id: 6, task: 'Removed Item 1!!!', isCompleted: false },
      { id: 7, task: 'Removed Item 2!!!', isCompleted: true },
      { id: 8, task: 'Removed Item 3!!!', isCompleted: true }
    ]
  },
  getters: {
    getAllActive(state) {
      return state.all.filter((task) => task.isCompleted === false);
    },
    getAllCompleted(state) {
      return state.all.filter((task) => task.isCompleted === true);
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
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
    },
    TODO_REMOVE(state, todoId) {
      console.log('TODO_REMOVE');
      state.trash.push(state.all.find((task) => task.id === todoId));
      state.all = state.all.filter((task) => task.id !== todoId);
    },
    TODO_REMOVE_ALL(state) {
      console.log('TODO_REMOVE_ALL');
      state.all = state.all.filter((task) => task.isCompleted === false);
    }
  },
  actions: {},
  modules: {}
});
