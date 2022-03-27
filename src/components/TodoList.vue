<template>
  <div class="todo-list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :id="'todo-item-' + todo.id"
      :prop-id="todo.id"
      :todo-task="todo.task"
      :todo-is-completed="todo.isCompleted"
      @check-item="todoToggleStatus(todo.id)"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: { type: { type: String, default: 'getAllActive' } },
  data() {
    return {
      todos: this.$store.getters[this.type]
    };
  },
  methods: {
    todoAdd() {
      console.log('addTodo()');
      this.$store.commit('ADD_TODO', '');
      this.todos = this.$store.getters[this.type];

      const todoId = this.todos[this.todos.length - 1].id;
      setTimeout(() => {
        const target = document.querySelector('#span-' + todoId);
        target.focus();
      }, 100);
    },
    todoEdit(event, todoId) {
      console.log('editTodo()');
      const todoContent = event.target.innerText;
      if (!todoContent) {
        this.deleteTodo(todoId);
      } else {
        this.$store.commit('EDIT_TODO_CONTENT', [todoId, todoContent]);
      }
    },
    todoDelete(todoId) {
      console.log('deleteTodo()');
      this.fadeItem(todoId);
      setTimeout(() => {
        this.$store.commit('DELETE_TODO', todoId);
        this.todos = this.$store.getters[this.type];
      }, 350);
    },
    todoToggleStatus(todoId) {
      console.log('toggleTodoStatus()');
      this.fadeItem(todoId);
      setTimeout(() => {
        this.$store.commit('TODO_TOGGLE_STATUS', todoId);
        this.todos = this.$store.getters[this.type];
      }, 350);
    },
    fadeItem(todoId) {
      const target = document.querySelector('#todo-item-' + todoId);
      target.style.transition = 'ease all 0.3s';
      target.style.opacity = '0';
    }
  }
};
</script>
<style lang="sass">
.todo-list
  margin-top: 10px
</style>
