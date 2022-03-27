<template>
  <the-nav-bar />
  <todo-list :with-add="true" />
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  name: 'HomeView',

  components: {
    TodoList,
    TheNavBar
  }
};
</script>
