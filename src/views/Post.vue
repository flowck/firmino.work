<template>
  <div class="app-post-view">
    <app-post v-if="currentPost" :post="currentPost" :isFull="true" :showExcerpt="false" />
    <app-comments v-if="currentPost" />
  </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { mapActions, mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import { IPost } from "@/store/modules/postModule/IPost";
import { Actions, Getters, Modules } from "@/store/contants";

@Component({
  metaInfo(this: PostView): MetaInfo {
    return {
      title: this.pageTitle,
      meta: [
        {
          property: "og:description",
          content: this.pageDescription
        },
        { property: "og:image", content: this.pageCover },
        { name: "twitter:image", content: this.pageCover },
        { property: "og:title", content: `${this.pageTitle} - Firmino Changani` },
        { property: "og:url", content: `https://changani.me/blog${this.$route.path}` }
      ]
    };
  },
  computed: {
    ...mapGetters(Modules.POST_MODULE, [Getters.CURRENT_POST])
  },
  methods: {
    ...mapActions(Modules.POST_MODULE, [Actions.SetCurrentPost])
  }
})
export default class PostView extends Vue {
  private readonly currentPost!: IPost;
  private readonly setCurrentPost!: Function;
  private readonly HOST = process.env.VUE_APP_HOST;

  get pageTitle() {
    return !this.currentPost ? "Loading... " : this.currentPost.title;
  }

  get pageDescription(): string {
    return this.currentPost ? this.currentPost.excerpt.substring(0, 120).replaceAll(/<[^>]*>/g, "") : "";
  }

  get pageCover(): string {
    return this.currentPost && this.currentPost.cover ? this.currentPost.cover : `${this.HOST}/firminochangani.png`;
  }

  private created() {
    this.setCurrentPost(this.$route.params.id);
  }

  private beforeDestroy() {
    this.setCurrentPost(null);
  }
}
</script>
