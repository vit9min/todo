<template>
  <todo-action-add @action-add="todoActionAdd($event)" />
  <todo-list type="getAllActive" />
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoActionAdd from '@/components/TodoActionAdd.vue';

export default {
  name: 'ActiveView',

  components: {
    TodoList,
    TodoActionAdd
  },
  methods: {
    todoActionAdd(event) {
      this.$store.commit('TODO_ADD', event.target.innerText);
    }
  }
};
</script>
