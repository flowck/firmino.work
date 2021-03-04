<template>
  <div class="app-blog">
    <app-post v-for="post in posts" :key="post.id" :post="post"></app-post>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Actions, Getters, Modules } from "@/store/contants";
import { Vue, Component } from "vue-property-decorator";

@Component({
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
