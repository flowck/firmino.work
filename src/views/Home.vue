<template>
  <div class="app-home">
    <article class="app-me">
      <img class="app-me__avatar" src="/images/me.jpg" alt="Firmino Changani" />
      <h1 class="app-me__title">Firmino Changani</h1>
      <div class="app-me__intro">
        <p>
          I am a Software Engineer passionate about building products. At the moment I am focused in Node.js, and
          Typescript.
        </p>
        <br />
        <p>Interested in Software Architecture, Standards, well known Patterns, and modern Distributed Systems.</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  metaInfo: {
    titleTemplate: "",
    title: "Firmino Changani",
    meta: [
      {
        property: "og:description",
        content: "Firmino is a software engineer, passionate about building projects based in Javascript and Nodejs."
      },
      { property: "og:title", content: "Firmino Changani" },
      { property: "og:url", content: "https://changani.me" },
      { property: "og:image", content: "https://changani.me/site/firminochangani.png" }
    ]
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.app-home {
  top: 50%;
  left: 50%;
  width: 475px;
  display: flex;
  position: absolute;
  align-items: center;
  transform: translate(-50%, -50%);

  @include mq-mobile {
    width: 90%;
  }
}

@media screen and (max-height: 650px) {
  .app-home {
    top: initial;
    left: initial;
    display: block;
    margin: 0 auto;
    transform: none;
    position: relative;
  }
}

.app-me {
  display: flex;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  &__title {
    margin: 30px 0;
    font-size: 14px;
    font-family: $font-headline;
  }

  &__avatar {
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
  }

  &__intro {
    font-size: 14px;
  }
}
</style>
