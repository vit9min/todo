<template>
  <div class="action">
    <icon-align-left class="action__icon" />
    <div class="action__placeholder">
      Add a task...
    </div>
  </div>
</template>

<script>
import IconAlignLeft from '@/icons/IconAlignLeft.vue';

export default {
  name: 'TodoListActionAdd',
  components: { IconAlignLeft }
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
    color: $color-text-alt
</style>
