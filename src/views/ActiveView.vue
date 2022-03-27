<template>
  <todo-action-add />
  <todo-list />
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoActionAdd from '@/components/TodoActionAdd.vue';

export default {
  name: 'ActiveView',

  components: {
    TodoList,
    TodoActionAdd
  }
};
</script>
