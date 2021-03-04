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
