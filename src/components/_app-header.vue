<template>
  <header class="app-header">
    <div class="app-header__container app-container app-container--full">
      <div class="app-header__title">
        <router-link :to="{ name: 'Home' }">
          Firmino Changani
        </router-link>
      </div>
      <nav :class="`app-header__navigation ${navStatusClass}`">
        <ul>
          <li @click="isMenuOpen = false">
            <router-link :to="{ name: 'Blog' }" id="nav_blog">
              Blog
            </router-link>
          </li>

          <li @click="isMenuOpen = false">
            <router-link :to="{ name: 'Archive' }" id="nav_archive">
              Archive
            </router-link>
          </li>

          <li @click="isMenuOpen = false">
            <a :href="GITHUB">Github</a>
          </li>

          <li @click="isMenuOpen = false">
            <a :href="LINKEDIN">LinkedIn</a>
          </li>
        </ul>
      </nav>
      <div @click="toggleMenu" :class="`app-header__menu-toggle ${menuButtonStatusClass}`">
        <div class="app-header__menu-toggle__bar"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private isMenuOpen = false;
  private readonly GITHUB = "https://github.com/flowck";
  private readonly LINKEDIN = "https://linkedin.com/in/firminochangani";

  get menuButtonStatusClass(): string {
    return this.isMenuOpen ? "app-header__menu-toggle--is-open" : "";
  }

  get navStatusClass(): string {
    return this.isMenuOpen ? "app-header__navigation--is-open" : "app-header__navigation--is-closed";
  }

  private toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
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

    @include mq-tablet {
      left: 0;
      top: 70px;
      opacity: 0;
      z-index: 10;
      width: 100%;
      padding: 5%;
      visibility: hidden;
      position: absolute;
      height: calc(100% - 70px);
      background-color: $color-dark--darker;

      &--is-open {
        opacity: 1;
        visibility: visible;
      }

      &--is-open {
        transition: visibility 0.5s, opacity 0.5s;
      }

      ul {
        flex-direction: column;

        li:not(:first-child) {
          margin: 10px 0 0 0;
        }
      }
    }
  }

  &__menu-toggle {
    display: none;
    @include mq-tablet {
      width: 30px;
      height: 30px;
      display: block;
      cursor: pointer;

      &__bar {
        width: 100%;
        height: 3px;
        margin-top: 6.5px;
        position: relative;
        transition: all 0.3s;
        background-color: $color-white;

        &::before,
        &::after {
          content: "";
          width: 100%;
          height: 3px;
          position: absolute;
          transition: all 0.3s;
          background-color: $color-white;
        }

        &::before {
          top: 6px;
        }

        &::after {
          top: 12px;
        }
      }

      &--is-open {
        .app-header__menu-toggle__bar {
          margin-top: 13px;
          transform: rotate(45deg);

          &::before {
            top: 0px;
            transform: rotate(-90deg);
          }

          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
