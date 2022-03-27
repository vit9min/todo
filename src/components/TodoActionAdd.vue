<template>
  <div class="action-add">
    <div class="action-add__icon-plus" />
    <div class="action-add__content">
      Add item
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListActionAdd'
};
</script>

<style lang="sass">
.action-add
  height: 24px
  display: flex
  align-items: center
  &__icon-plus
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
</style>
