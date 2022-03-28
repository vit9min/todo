<template>
  <div class="action">
    <icon-align-left class="action__icon" />
    <div
      class="action__placeholder"
      contenteditable="true"
      @click="hidePlaceholder"
      @blur="visiblePlaceholder"
      @keypress.enter="visiblePlaceholder"
    >
      Add a task...
    </div>
  </div>
</template>

<script>
import IconAlignLeft from '@/icons/IconAlignLeft.vue';

export default {
  name: 'TodoListActionAdd',
  components: { IconAlignLeft },
  emits: ['actionAdd'],
  methods: {
    hidePlaceholder(event) {
      event.target.innerText = '';
    },
    visiblePlaceholder(event) {
      if (event.target.innerText == '') {
        event.target.innerText = 'Add a task...';
      } else {
        this.$emit('actionAdd', event);
        event.target.innerText = 'Add a task...';
        event.target.blur();
      }
    }
  }
};
</script>

<style lang="sass">
.action
  display: flex
  align-items: center
  height: 40px
  border-radius: 3px
  cursor: pointer
  border: 1px solid $color-border
  background-color: $color-background-alt
  &__icon
    padding: 10px
    fill: $color-text-alt
  &__placeholder
    outline: none
    width: calc( 100% - 50px )
    color: $color-text-alt
</style>
