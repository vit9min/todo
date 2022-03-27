<template>
  <todo-action-find />
  <todo-list type="getAllCompleted" />
</template>

<script>
import TodoActionFind from '@/components/TodoActionFind.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'CompletedView',
  components: { TodoActionFind, TodoList }
};
</script>
