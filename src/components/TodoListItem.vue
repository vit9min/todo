<template>
  <div class="todo-item">
    <app-checkbox
      @change="todoToggleStatus(todoId)"
      class="todo-item__action todo-item__action--complete"
    />
    <span
      contenteditable="true"
      class="todo-item__task"
      @blur="todoEditTask($event, todoId)"
    >
      {{ todoTask }}
    </span>
    <div
      @click="todoDelete(todoId)"
      class="todo-item__action todo-item__action--delete"
    />
  </div>
</template>
<script>
import AppCheckbox from '@/components/AppCheckbox.vue';

export default {
  name: 'TodoListItem',
  components: {
    AppCheckbox
  },
  props: {
    todoId: { type: String, default: '' },
    todoTask: { type: String, default: '' },
    todoIsCompleted: { type: Boolean, default: false },
    todoToggleStatus: { type: Function, default: () => {} },
    todoDeleteItem: { type: Function, default: () => {} },
    todoEditTask: { type: Function, default: () => {} }
  }
};
</script>
<style lang="sass">
.todo-item
  min-height: 25px
  display: flex
  align-items: flex-start

  &__action
    margin-top: 4px
    cursor: pointer
  &__task
    font: $font-base
    outline: 0
    width: calc(100% - 45px)
    margin-left: 10px
    cursor: text

  &__delete
    margin-left: 10px
</style>
