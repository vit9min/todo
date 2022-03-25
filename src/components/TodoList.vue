<template>
  <div class="todo-list">
    <div class="todo-list__title c-title">
      <div
        class="c-title__fill"
        @click="changeType"
      >
        {{ type.toUpperCase() }}
      </div>
      <div class="c-title__icons">
        <font-awesome-icon
          class="c-title__trash"
          icon="trash"
          @click="changeType"
        />
      </div>
    </div>
    <todo-list-item
      class="todo-list__item"
      v-for="todo in todos"
      :key="todo.id"
      :id="'todo-item-' + todo.id"
      :prop-id="todo.id"
      :todo-content="todo.todoContent"
      :todo-completed="todo.completed"
      :delete-todo="deleteTodo"
      :edit-todo="editTodo"
      :toggle-todo-status="toggleTodoStatus"
    />
    <todo-list-add-item
      @click="addTodo"
      v-if="withAdd & (type == 'active')"
    />
  </div>
</template>
<script>
import TodoListItem from '@/components/TodoList/TodoListItem.vue';
import TodoListAddItem from '@/components/TodoList/TodoListAddItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem, TodoListAddItem },
  props: {
    withAdd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      todos: [],
      type: 'active'
    };
  },
  mounted() {
    this.todos = this.$store.getters[this.type];
  },
  methods: {
    addTodo() {
      console.log('addTodo()');

      this.$store.commit('ADD_TODO', '');
      this.todos = this.$store.getters[this.type];

      const todoId = this.todos[this.todos.length - 1].id;
      setTimeout(() => {
        const target = document.querySelector('#span-' + todoId);
        target.focus();
      }, 100);
    },
    editTodo(event, todoId) {
      console.log('editTodo()');
      const todoContent = event.target.innerText;
      if (!todoContent) {
        this.deleteTodo(todoId);
      } else {
        this.$store.commit('EDIT_TODO_CONTENT', [todoId, todoContent]);
      }
    },
    deleteTodo(todoId) {
      console.log('deleteTodo()');
      this.fadeItem(todoId);
      setTimeout(() => {
        this.$store.commit('DELETE_TODO', todoId);
        this.todos = this.$store.getters[this.type];
      }, 350);
    },
    toggleTodoStatus(todoId) {
      console.log('toggleTodoStatus()');
      this.fadeItem(todoId);
      setTimeout(() => {
        this.$store.commit('TOGGLE_COMPLETE_STATUS', todoId);
        this.todos = this.$store.getters[this.type];
      }, 350);
    },
    fadeItem(todoId) {
      const target = document.querySelector('#todo-item-' + todoId);
      target.style.transition = 'ease all 0.3s';
      target.style.opacity = '0';
    },
    changeType() {
      const types = ['active', 'completed'];
      if (this.type == types[0]) {
        this.type = types[1];
      } else {
        this.type = types[0];
      }
      this.todos = this.$store.getters[this.type];
    }
  }
};
</script>
<style lang="sass">
.todo-list
  padding-left: 15px
  padding-right: 15px
  padding-top: 10px
  user-select: none
  border-top: 1px solid $dark

.c-title
  margin-bottom: 5px
  display: flex
  justify-content: space-between

  &__fill
    font: $base-font
    color: $text-color
    cursor: pointer

  &__icons
    color: $text-color
    cursor: pointer

    &:hover
      transition: all ease 0.3s
      color: $color-on-light
</style>
