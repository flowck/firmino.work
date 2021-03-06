<template>
  <div class="app-archive">
    <app-is-loading v-if="isLoading" />
    <section v-for="group in postsPerYear" :key="group.year" class="app-archive__aggreation">
      <h1 class="app-archive__aggreation__year">{{ group.year }}</h1>
      <app-post
        :post="post"
        :key="post.id"
        :isFull="false"
        :showDate="false"
        :showExcerpt="false"
        v-for="post in group.posts"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import { Actions, Getters, Modules } from "@/store/contants";

@Component({
  metaInfo: {
    title: "Archive"
  },
  computed: {
    ...mapGetters([Getters.IS_LOADING]),
    ...mapGetters(Modules.POST_MODULE, [Getters.POSTS_PER_YEAR])
  },
  methods: {
    ...mapActions(Modules.POST_MODULE, [Actions.GetPosts, Actions.CleanPosts])
  }
})
export default class Archive extends Vue {
  private readonly getPosts!: Function;
  private readonly cleanPosts!: Function;

  private created() {
    this.getPosts();
  }

  private beforeDestroy() {
    this.cleanPosts();
  }
}
</script>

<style scoped lang="scss">
.app-archive {
  &__aggreation {
    &__year {
      @include app-spacing("margin-top", "l");

      font-size: 20px;
      color: $color-grey;
      font-family: $font-heading-one, "arial";
    }
  }
}
</style>
