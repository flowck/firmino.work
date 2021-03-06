<template>
  <div class="app-blog">
    <app-post v-for="post in posts" :key="post.id" :post="post" />
    <app-link :to="{ name: 'Archive' }">More posts</app-link>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
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
  private getPosts!: Function;
  private doesCacheContainsPosts!: Function;

  private async created() {
    if (!this.doesCacheContainsPosts) {
      await this.getPosts();
    }
  }
}
</script>
