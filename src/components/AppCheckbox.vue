<template>
  <div class="app-checkbox">
    <icon-check
      :class="[
        'app-checkbox__toggle',
        { 'app-checkbox__toggle--checked': isChecked }
      ]"
    />
  </div>
</template>

<script>
import IconCheck from '@/icons/IconCheck.vue';

export default {
  name: 'AppCheckbox',
  components: { IconCheck },
  props: { isChecked: { type: Boolean, default: false } }
};
</script>

<style lang="sass">
.app-checkbox
  width: 16px
  height: 16px
  &__toggle
    border-radius: 3px
    fill: transparent
    border: 1px solid $color-border
    width: 10px
    height: 10px
    padding: 2px
    &--checked
      fill: $color-text
</style>
