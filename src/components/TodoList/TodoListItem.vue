<template>
  <div :class="['todo-item', { 'todo-item--completed': todoCompleted }]">
    <c-checkbox
      @change="toggleTodoStatus(propId), (completed = !completed)"
      :prop-check="!completed"
      class="todo-item__checkbox"
    />
    <span
      :class="[
        'todo-item__content',
        { 'todo-item__content--completed': !completed }
      ]"
      contenteditable="true"
      :id="'span-' + propId"
      @blur="editTodo($event, propId)"
    >
      {{ todoContent }}
    </span>
    <font-awesome-icon
      @click="deleteTodo(propId)"
      class="todo-item__delete"
      icon="xmark"
      :id="'delete-' + propId"
    />
  </div>
</template>
<script>
import CCheckbox from '@/components/UI/CCheckbox.vue';

export default {
  name: 'TodoListItem',
  components: {
    CCheckbox
  },
  props: {
    propId: { type: String, default: '' },
    todoContent: { type: String, default: '' },
    todoCompleted: { type: Boolean, default: false },
    toggleTodoStatus: { type: Function, default: () => {} },
    deleteTodo: { type: Function, default: () => {} },
    editTodo: { type: Function, default: () => {} }
  },
  data() {
    return {
      completed: !this.todoCompleted
    };
  }
};
</script>
<style lang="sass">
.todo-item
  min-height: 25px
  display: flex
  align-items: flex-start
  .fa-square-check, .fa-square
      color: $text-color
  &__checkbox, &__delete
    margin-top: 4px
    cursor: pointer
  &__content
    outline: 0
    width: calc(100% - 45px)
    margin-left: 10px
    font: $base-font
    color: $text-color
    cursor: text
    &--completed
      transition: ease all 0.3s
      opacity: 0.7
      text-decoration: line-through
  &__delete
    opacity: 0
    margin-left: 10px



  .todo-item__content, .todo-item__delete
    &:hover, &:focus
      transition: all ease 0.3s
      color: $color-on-light
  &:hover &__delete
    transition: all ease 0.3s
    opacity: 1
  .todo-item__content
    &:focus + .todo-item__delete
      transition: all ease 0.3s
      opacity: 1
</style>
