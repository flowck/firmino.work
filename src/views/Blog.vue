<template>
  <div class="app-blog">
    <app-post v-for="post in posts" :key="post.id" :post="post"></app-post>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import { IPost } from "@/store/modules/postModule/IPost";
import { Actions, Getters, Modules } from "@/store/contants";

@Component({
  metaInfo: { title: "Blog" },
  computed: {
    ...mapGetters(Modules.POST_MODULE, [Getters.POSTS])
  },
  methods: {
    ...mapActions(Modules.POST_MODULE, [Actions.GetPosts])
  }
})
export default class Blog extends Vue {
  private currentPost!: IPost;
  private getPosts!: Function;
  private doesCacheContainsPosts!: Function;

  private metaInfo() {
    return {
      title: this.currentPost.title
    };
  }

  private async created() {
    if (!this.doesCacheContainsPosts) {
      await this.getPosts();
    }

    if (this.currentPost) {
      this.metaInfo = () => {
        title: this.currentPost.title;
      };
    }
  }
}
</script>
