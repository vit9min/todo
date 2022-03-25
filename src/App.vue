<template>
  <router-view />
</template>
<script>
import '@/sass/style.sass';

export default {
  components: {},
  mounted() {
    this.$router.push('/');
  }
};
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
  display: flex
  justify-content: center

#app
  width: 300px
  min-height: 440px
  resize: vertical
</style>
