<template>
  <router-link class="app-link" :to="to">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Link extends Vue {
  @Prop({ required: true })
  private to!: Route;
}
</script>

<style scoped lang="scss">
.app-link {
  font-size: 20px;
  color: $color-highlight;
  text-decoration: underline;
  font-family: $font-heading-one;
}
</style>
