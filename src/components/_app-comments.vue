<template>
  <div class="app-comments">
    <Disqus :shortname="DISQUS_SHORTNAME" :pageConfig="pageConfig"></Disqus>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
const { VUE_APP_DISQUS_SHORTNAME } = process.env;

@Component
export default class Comments extends Vue {
  private readonly DISQUS_SHORTNAME = VUE_APP_DISQUS_SHORTNAME;

  @Prop({ required: true })
  private title!: string;

  @Prop({ required: true })
  private slug!: string;

  get pageConfig() {
    const { title, slug } = this;
    return { title, slug };
  }
}
</script>
