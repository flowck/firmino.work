<template>
  <div id="app">
    <app-header />
    <div class="app-views app-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";

#app {
  height: 100%;
}

.app-views {
  padding-top: 40px;
  height: calc(100% - 70px);
}
</style>
