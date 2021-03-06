<template>
  <div class="app-comments">
    <Disqus :shortname="DISQUS_SHORTNAME"></Disqus>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
const { VUE_APP_DISQUS_SHORTNAME } = process.env;

@Component
export default class Comments extends Vue {
  private readonly DISQUS_SHORTNAME = VUE_APP_DISQUS_SHORTNAME;
}
</script>
