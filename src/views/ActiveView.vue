<template>
  <todo-list />
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'ActiveView',

  components: {
    TodoList
  }
};
</script>
