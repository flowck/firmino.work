<template>
  <div class="app-post-view">
    <app-post v-if="currentPost" :post="currentPost" :isFull="true" />
    <app-comments v-if="currentPost" :title="currentPost.title" :slug="currentPost.slug" />
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
    return { title: this.pageTitle };
  },
  computed: {
    ...mapGetters(Modules.POST_MODULE, [Getters.CURRENT_POST])
  },
  methods: {
    ...mapActions(Modules.POST_MODULE, [Actions.SetCurrentPost])
  }
})
export default class PostView extends Vue {
  private currentPost!: IPost;
  private setCurrentPost!: Function;

  get pageTitle() {
    return this.currentPost.title;
  }

  private created() {
    this.setCurrentPost(this.$route.params.id);
  }

  private beforeDestroy() {
    this.setCurrentPost(null);
  }
}
</script>
