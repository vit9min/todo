<template>
  <todo-action-find />
  <todo-list type="getAllRemoved" />
</template>

<script>
import TodoActionFind from '@/components/TodoActionFind.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'RemovedView',
  components: { TodoActionFind, TodoList }
};
</script>
