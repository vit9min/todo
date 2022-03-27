<template>
  <app-input
    type="checkbox"
    class="app-checkbox"
    v-model:modelChecked="check"
  />
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
.app-checkbox
  position: relative
  width: 16px
  height: 16px
</style>
