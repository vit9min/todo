<template>
  <header class="header">
    <the-nav-bar />
  </header>
  <main class="main">
    <todo-list
      type="active"
      :with-add="true"
    />
  </main>
</template>
<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    TheNavBar,
    TodoList
  }
};
</script>
<style lang="sass">
.header
  height: $header-height
.main
  background: $white
  height: calc( 100% - $header-height )
  display: flex
  flex-direction: column
  justify-content: space-between
  &__completed
    .todo-item__content
      text-decoration: line-through
</style>
