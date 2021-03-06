<template>
  <div class="app-home">
    <article class="app-me">
      <img class="app-me__avatar" src="/images/me.png" alt="Firmino Changani" />
      <h1 class="app-me__title">Firmino Changani</h1>
      <div class="app-me__intro">
        <p>
          Interested in continuous improvement, listening to other people's life experiences, share thoughts and
          ultimately, make people around me comfortable and happy.
        </p>
        <br />
        <p>
          Professionally, I am a Software Engineer and most of the time I am focused on Frontend Engineering.
        </p>
        <br />
        <p>
          Get to know more about my professional path on LinkedIn, and read my thoughts on my personal
          <router-link :to="{ name: 'Blog' }">blog</router-link>
          .
        </p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  metaInfo: {
    titleTemplate: "",
    title: "Firmino Changani"
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.app-home {
  top: 50%;
  left: 50%;
  width: 550px;
  display: flex;
  position: absolute;
  align-items: center;
  transform: translate(-50%, -50%);
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
}
</style>
