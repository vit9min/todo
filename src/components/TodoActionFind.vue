<template>
  <div class="action">
    <icon-search class="action__icon" />
    <div class="action__placeholder">
      Search a task...
    </div>
  </div>
</template>

<script>
import IconSearch from '@/icons/IconSearch.vue';

export default {
  name: 'TodoListActionAdd',
  components: { IconSearch }
};
</script>
