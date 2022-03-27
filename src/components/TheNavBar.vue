<template #nav-bar>
  <nav class="nav-bar">
    <div class="nav-bar__title">
      Future To-Do List
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TheNavBar',
  components: {}
};
</script>
<style lang="sass">
.nav-bar
  padding: 10px
  border-bottom: 1px
  background: $dark

  &__title
    font: $base-font
    color: $color-on-dark
    user-select: none
    text-align: center
</style>
