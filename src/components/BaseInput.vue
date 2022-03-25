<template>
  <div>
    <label :for="id">
      <slot />
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :checked="modelChecked"
      :placeholder="placeholder"
      @input="updateInput($event)"
      @change="updateChecked($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    modelChecked: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'update:modelChecked'],
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    updateChecked(event) {
      this.$emit('update:modelChecked', event.target.checked);
    }
  }
};
</script>
