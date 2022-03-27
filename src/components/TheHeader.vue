<template #header>
  <div class="the-header">
    <icon-angle-left class="the-header__icon icon--previous" />
    <div class="the-header__date date">
      <div class="date--short">
        Thursday
      </div>
      <div class="date--full">
        Mar 23, 2017
      </div>
    </div>
    <icon-angle-left class="the-header__icon icon__next" />
  </div>
</template>
<script>
import IconAngleLeft from '@/icons/IconsAngleLeft.vue';
export default {
  name: 'TheHeader',
  components: { IconAngleLeft }
};
</script>
<style lang="sass">
.the-header
    display: flex
    justify-content: center
    align-items: center
    height: 100px
    padding: 20px
    &__date
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
    &__icon
        width: 24px
        height: 24px
        fill: $color-text-alt
    .icon__next
        transform: rotate(180deg)


.date
    width: 210px
    &--short
        font-size: 32px
        font-weight: bold
        color: $color-text
        margin-bottom: 20px
    &--full
        color: $color-text-alt
</style>
