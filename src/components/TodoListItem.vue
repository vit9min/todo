<template>
  <div class="todo-item">
    <app-checkbox
      class="todo-item__checkbox"
      :id="todoId"
      :is-checked="todoIsCompleted"
      @click="$emit('checkItem')"
    />

    <span
      :contenteditable="!todoIsCompleted"
      :class="[
        'todo-item__task',
        { 'todo-item__task--completed': todoIsCompleted }
      ]"
    >
      {{ todoTask }}
    </span>
    <icon-menu-dots class="todo-item__menu" />
  </div>
</template>

<script>
import IconMenuDots from '@/icons/IconMenuDots.vue';
import AppCheckbox from '@/components/AppCheckbox.vue';

export default {
  name: 'TodoListItem',
  components: {
    AppCheckbox,
    IconMenuDots
  },
  emits: ['checkItem'],
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
  align-items: baseline
  &__checkbox
    position: relative
    top: 2px
  &__task
    color: $color-text
    outline: 0
    width: calc(100% - 45px)
    margin-left: 10px
    cursor: text
    &--completed
      text-decoration: line-through
  &__menu
    fill: $color-element-alt
</style>
