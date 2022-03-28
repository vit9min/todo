<template>
  <div class="action">
    <icon-search class="action__icon" />
    <div
      class="action__placeholder"
      contenteditable="true"
      @click="hidePlaceholder"
      @blur="visiblePlaceholder"
    >
      Search a task...
    </div>
  </div>
</template>

<script>
import IconSearch from '@/icons/IconSearch.vue';

export default {
  name: 'TodoListActionAdd',
  components: { IconSearch },
  methods: {
    hidePlaceholder(event) {
      event.target.innerText = '';
    },
    visiblePlaceholder(event) {
      if (event.target.innerText == '') {
        event.target.innerText = 'Search a task...';
      } else {
        event.target.innerText = 'Search a task...';
        event.target.blur();
      }
    }
  }
};
</script>
