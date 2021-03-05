<template>
  <div id="app">
    <app-header />
    <div class="app-views app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  metaInfo: { titleTemplate: "%s - Firmino Changani" }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

#app {
  min-height: 100%;
}

.app-views {
  @include app-spacing("padding-top", "l");
  @include app-spacing("padding-bottom", "l");
  height: calc(100% - 70px);
}
</style>
