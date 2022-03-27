<template>
  <div class="add-todo-item">
    <div
      icon="plus"
      class="add-todo-item__plus"
    />
    <div class="add-todo-item__content">
      Add item
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItemAdd',
  components: {},
  mounted() {
    console.log('TodoListItemAdd');
  }
};
</script>

<style lang="sass">
.add-todo-item
  height: 24px
  display: flex
  align-items: center
  &__plus
    color: $text-color
    cursor: pointer
    width: 16px
    height: 16px
  &__content
    margin-left: 10px
    font: $base-font
    color: $text-color
    user-select: none
    cursor: pointer
  &:hover
    .add-todo-item__content, .add-todo-item__plus
      transition: all ease 0.3s
      color: $color-on-light
</style>
