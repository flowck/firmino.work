<template>
  <header class="app-header">
    <div class="app-header__container app-container app-container--full">
      <div class="app-header__title">
        <router-link :to="{ name: 'Home' }">
          Firmino Changani
        </router-link>
      </div>
      <nav class="app-header__navigation">
        <ul>
          <li>
            <router-link :to="{ name: 'Blog' }" id="nav_blog">
              Blog
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Archive' }" id="nav_archive">
              Archive
            </router-link>
          </li>

          <li>
            <a :href="GITHUB">Github</a>
          </li>

          <li>
            <a :href="LINKEDIN">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private readonly GITHUB = "https://github.com/flowck";
  private readonly LINKEDIN = "https://linkedin.com/in/firminochangani";
}
</script>

<style scoped lang="scss">
.app-header {
  height: 70px;
  transition: background-color 1s;

  &:hover {
    background-color: $color-dark;
  }

  &__container {
    display: flex;
    height: inherit;
    align-items: center;
    background-color: transparent;
    justify-content: space-between;
  }

  &__title a {
    font-size: 12px;
    color: $color-highlight;
    font-family: $font-headline;

    &:hover {
      color: $color-white;
    }
  }

  &__navigation {
    ul {
      display: flex;

      li {
        a {
          font-size: 14px;
          font-family: $font-regular;
        }

        &:hover {
          a {
            color: $color-highlight;
          }
        }

        &:not(:first-child) {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
