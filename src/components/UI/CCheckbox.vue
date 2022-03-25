<template>
  <base-input
    type="checkbox"
    class="c-checkbox"
    v-model:modelChecked="check"
  >
    <font-awesome-icon
      :icon="check ? ['fas', 'square-check'] : ['far', 'square']"
    />
  </base-input>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
  name: 'CCheckbox',
  components: { BaseInput },
  props: {
    propCheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      check: this.propCheck
    };
  }
};
</script>

<style lang="sass">
.c-checkbox
  position: relative
  width: 16px
  height: 16px
  &:hover
   svg
     transition: ease all 0.3s
     color: $color-on-light
  input
    margin: 0
    appearance: none
    cursor: pointer
    z-index: 1
  input, label, svg
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
</style>
