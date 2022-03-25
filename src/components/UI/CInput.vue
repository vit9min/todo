<template>
  <base-input
    type="text"
    class="c-input"
    :placeholder="placeholder"
    v-model:modelValue="todoValue"
  />
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
  name: 'CInput',
  components: { BaseInput },
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      todoValue: ''
    };
  }
};
</script>

<style lang="sass">
.c-input
  width: calc(100% - 45px)
  input
    margin: 0
    appearance: none
    cursor: pointer
    border: 0
    outline: 0
    background: transparent
    font: $base-font
    width: 100%
</style>
