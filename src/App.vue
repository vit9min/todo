<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  components: { TheFooter, TheHeader },
  name: 'App',
  data() {
    return {};
  }
};
</script>
<style lang="sass">
#app
  width: 400px
  height: 450px
  overflow: hidden
  display: flex
  background: $color-background
  flex-direction: column
  justify-content: space-between
</style>
