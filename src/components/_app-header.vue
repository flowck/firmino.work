<template>
  <header class="app-header">
    <div class="app-header__container app-container">
      <div class="app-header__title">
        <router-link to="/">
          Firmino Changani
        </router-link>
      </div>
      <nav class="app-header__navigation">
        <ul>
          <li>
            <router-link :to="{ name: 'Blog' }">
              <a>Blog</a>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Home' }">
              <a>Projects</a>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/styles/partials/colors";
@import "../assets/styles/partials/fonts";

.app-header {
  height: 50px;

  &__container {
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 12px;
    font-family: $font-headline;

    &:hover a {
      color: $color-highlight;
    }
  }

  &__navigation {
    ul {
      display: flex;

      li {
        a {
          font-size: 12px;
        }

        &:hover {
          a {
            color: $color-highlight;
          }
        }
      }

      li:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
}
</style>
