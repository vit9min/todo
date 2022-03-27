<template>
  <app-input
    type="checkbox"
    class="c-checkbox"
    v-model:modelChecked="check"
  >
    <div :icon="check ? ['fas', 'square-check'] : ['far', 'square']" />
  </app-input>
</template>

<script>
import AppInput from '@/components/AppInput.vue';

export default {
  name: 'AppCheckbox',
  components: { AppInput },
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
