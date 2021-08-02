<template>
  <article class="project">
    <a :href="project.url" class="project__root-link">
      <h1 class="project__name">{{ project.name }}</h1>
      <ul class="project__stack">
        <li v-for="tech in project.stack" :key="tech" :style="`background-color: ${getTechColor(tech)};`">
          {{ tech }}
        </li>
      </ul>
      <p class="project__description">{{ project.description }}</p>
    </a>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface IProject {
  id: string;
  url: string;
  name: string;
  description: string;
}

@Component({})
export default class Project extends Vue {
  @Prop({})
  private project!: IProject;
  private stackColors: Record<string, string> = {
    vuejs: "#42b983",
    html5: "#df4b25",
    reactjs: "#0a9fd6",
    javascript: "#f1da1c",
    nodejs: "#8cc03e",
    sass: "#c65d92",
    graphql: "#dd33a4",
    postgresql: "#305e8d",
    mongodb: "#409332",
    git: "#ef6322",
    webpack: "#89d1f3",
    typescript: "#2f75c1"
  };

  getTechColor(value: string) {
    return value ? this.stackColors[value.replace(".", "").toLowerCase()] : "";
  }
}
</script>

<style lang="scss" scoped>
.project {
  padding: 10px;
  border-radius: 5px;
  border: 0.5px solid $color-white;

  &:hover {
    .project__name {
      color: $color-highlight;
    }
  }

  &__root-link {
    height: 100%;
    display: block;
    color: $color-white;
  }

  &__name {
    font-size: 18px;
    font-family: $font-heading-one, arial;
  }

  &__description {
    font-size: 14px;
  }

  &__stack {
    display: flex;
    font-size: 12px;
    flex-wrap: wrap;
    margin: 10px 0 5px 0;

    li {
      padding: 0 5px;
      color: $color-dark;
      border-radius: 3px;
      margin-bottom: 5px;
      background-color: $color-white;

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
}
</style>
