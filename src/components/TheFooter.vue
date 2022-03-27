<template #footer>
  <footer class="the-footer">
    <router-link
      class="the-footer__router-link router-link"
      v-for="navRoute in navRoutes"
      :key="navRoute.path"
      :to="navRoute.path"
    >
      {{ navRoute.title }}
    </router-link>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
  components: {},
  data() {
    return {
      navRoutes: [
        { path: '/', title: 'Active' },
        { path: '/completed', title: 'Completed' },
        { path: '/removed', title: 'Removed' }
      ]
    };
  },
  mounted() {}
};
</script>
<style lang="sass">
.the-footer
  padding: 10px
  display: flex
  align-items: center
  justify-content: center
  border-top: 2px solid $color-border


  &__router-link + &__router-link
    margin-left: 20px
</style>
