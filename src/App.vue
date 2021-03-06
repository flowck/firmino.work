<template>
  <div id="app">
    <app-header />
    <div class="app-views app-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Vue, Component } from "vue-property-decorator";

@Component({
  metaInfo(this: App): MetaInfo {
    return {
      titleTemplate: "%s - Firmino Changani",
      meta: [
        { name: "twitter:creator", content: "@firminochangani" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: this.defaultCover }
      ]
    };
  }
})
export default class App extends Vue {
  private readonly defaultCover = `${process.env.VUE_APP_HOST}/images/firminochangani.png`;
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

#app {
  min-height: 100%;
}

.app-views {
  @include app-spacing("padding-top", "l");
  @include app-spacing("padding-bottom", "l");
  min-height: calc(100% - 70px);
}
</style>
