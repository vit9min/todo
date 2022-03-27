<template>
  <the-nav-bar />
  <todo-list />
  <todo-action-add />
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoActionAdd from '@/components/TodoActionAdd.vue';
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  name: 'ActiveView',

  components: {
    TodoList,
    TheNavBar,
    TodoActionAdd
  }
};
</script>
