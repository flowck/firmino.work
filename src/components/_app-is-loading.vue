<template>
  <div class="app-is-loading">
    <div class="app-is-loading__container" v-for="index in numberOfContainers" :key="index">
      <div class="app-is-loading__container__bar app-is-loading__container__date"></div>
      <div class="app-is-loading__container__bar app-is-loading__container__title"></div>
      <div class="app-is-loading__container__bar"></div>
      <div class="app-is-loading__container__bar"></div>
      <div class="app-is-loading__container__bar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class IsLoading extends Vue {
  @Prop({ default: 5 })
  private count!: number;

  get numberOfContainers(): number[] {
    const containers: number[] = [];
    const iterations = this.count - 1;

    for (let i = 0; i <= iterations; i++) {
      containers.push(i);
    }

    return containers;
  }
}
</script>

<style scoped lang="scss">
.app-is-loading {
  width: 100%;

  &__container {
    &__bar {
      height: 10px;
      animation: isLoading 1s infinite;
      background-color: $color-dark--light;
      @include app-spacing("margin-bottom", "s");
    }

    &__date {
      width: 20%;
    }

    &__title {
      width: 80%;
      @include app-spacing("margin-bottom", "m");
    }

    &:not(:last-child) {
      @include app-spacing("margin-bottom", "l");
    }
  }
}

@keyframes isLoading {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
