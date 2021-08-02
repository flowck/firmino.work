<template>
  <section class="app-portfolio">
    <div class="app-portfolio__projects">
      <app-project v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script lang="ts">
import projects from "../data/projects";
import { Vue, Component } from "vue-property-decorator";

@Component({
  metaInfo: { title: "Portfolio" }
})
export default class Portfolio extends Vue {
  private projects = projects;
}
</script>

<style lang="scss" scoped>
.app-portfolio__projects {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
