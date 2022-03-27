<template>
  <div class="the-clock">
    <icon-angle-left
      @click="setPreviousDay"
      class="the-clock__icon icon--previous"
    />
    <div class="the-clock__date">
      <div class="the-clock__date--long-weekday">
        {{ longWeekday }}
      </div>
      <div class="the-clock__date--regional-time">
        {{ time }}
      </div>
    </div>
    <icon-angle-left
      @click="setNextDay"
      class="the-clock__icon icon--next"
    />
  </div>
</template>
<script>
import IconAngleLeft from '@/icons/IconsAngleLeft.vue';
export default {
  name: 'TheHeader',
  components: { IconAngleLeft },
  data() {
    return {
      raw: new Date(),
      time: Date,
      longWeekday: Date
    };
  },
  mounted() {
    this.updateClock();
    this.setClock();
  },
  methods: {
    updateClock() {
      this.time = this.raw.toLocaleString('eu-US');
      this.longWeekday = this.raw.toLocaleString('eu-US', { weekday: 'long' });
    },
    setClock() {
      setInterval(() => {
        this.raw.setMilliseconds(this.raw.getMilliseconds() + 100);
        this.updateClock();
      }, 100);
    },
    setNextDay() {
      this.raw.setDate(this.raw.getDate() + 1);
    },
    setPreviousDay() {
      this.raw.setDate(this.raw.getDate() - 1);
    }
  }
};
</script>
<style lang="sass">
.the-clock
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    &__icon
        width: calc( 100% - 234px  )
        height: 24px
        fill: $color-text-alt
    .icon--next
        transform: rotate(180deg)
    &__date
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        width: 210px
        user-select: none
        &--long-weekday
            font-size: 32px
            font-weight: bold
            color: $color-text
            margin-bottom: 20px
        &--regional-time
            color: $color-text-alt
</style>
