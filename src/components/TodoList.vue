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
  computed: {
    getTodosCount() {
      return this.$store.getters.getTodosCount;
    }
  },
  watch: {
    getTodosCount() {
      this.todos = this.$store.getters[this.type];
    }
  },
  methods: {
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
      }, 350);
    },
    todoToggleStatus(todoId) {
      console.log('toggleTodoStatus()');
      this.fadeItem(todoId);
      setTimeout(() => {
        this.$store.commit('TODO_TOGGLE_STATUS', todoId);
      }, 350);
    },
    fadeItem(todoId) {
      const target = document.querySelector('#todo-item-' + todoId);
      target.style.transition = 'ease all 0.3s';
      target.style.opacity = '0';
      setTimeout(() => (target.style.display = 'none'), 350);
    }
  }
};
</script>
<style lang="sass">
.todo-list
  height: calc(100% - 60px)
  margin-top: 10px
  overflow-y: scroll
  scrollbar-base-color: blue
  scrollbar-face-color: yallow
  &::-webkit-scrollbar
    width: 0
</style>
