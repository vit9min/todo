<template #header>
  <div class="the-header">
    <the-clock />
  </div>
</template>
<script>
import TheClock from '@/components/TheClock.vue';
export default {
  name: 'TheHeader',
  components: { TheClock }
};
</script>
<style lang="sass">
.the-header
    display: flex
    justify-content: center
    align-items: center
    height: 100px
    padding: 20px
</style>
