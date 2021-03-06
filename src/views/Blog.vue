<template>
  <div class="app-blog">
    <div v-if="isLoading">
      <app-is-loading />
    </div>
    <app-post v-for="post in posts" :key="post.id" :post="post" />
    <app-link v-if="!isLoading" :to="{ name: 'Archive' }">More posts</app-link>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import { Actions, Getters, Modules } from "@/store/contants";
import { IPost } from "@/store/modules/postModule/IPost";

@Component({
  metaInfo: { title: "Blog" },
  computed: {
    ...mapGetters([Getters.IS_LOADING]),
    ...mapGetters(Modules.POST_MODULE, [Getters.POSTS])
  },
  methods: {
    ...mapActions(Modules.POST_MODULE, [Actions.GetPosts, Actions.CleanPosts])
  }
})
export default class Blog extends Vue {
  private readonly PER_PAGE = 15;
  private readonly posts!: IPost[];
  private readonly getPosts!: Function;
  private readonly cleanPosts!: Function;

  private async created() {
    await this.getPosts(this.PER_PAGE);
  }

  private beforeDestroy() {
    this.cleanPosts();
  }
}
</script>
