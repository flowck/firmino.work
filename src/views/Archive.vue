<template>
  <div class="app-archive">
    <app-post v-for="post in posts" :key="post.id" :isFull="false" :showExcerpt="false" :post="post" />
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Getters, Modules } from "@/store/contants";
import { Vue, Component } from "vue-property-decorator";

@Component({
  computed: {
    ...mapGetters(Modules.POST_MODULE, [Getters.POSTS])
  }
})
export default class Archive extends Vue {}
</script>
