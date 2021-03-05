<template>
  <div class="app-post-view">
    <app-post v-if="currentPost" :post="currentPost" :isFull="true"></app-post>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import { Actions, Getters, Modules } from "@/store/contants";

@Component({
  computed: {
    ...mapGetters(Modules.POST_MODULE, [Getters.CURRENT_POST])
  },
  methods: {
    ...mapActions(Modules.POST_MODULE, [Actions.SetCurrentPost])
  }
})
export default class PostView extends Vue {
  private setCurrentPost!: Function;

  private created() {
    this.setCurrentPost(this.$route.params.id);
  }

  private beforeDestroy() {
    this.setCurrentPost(null);
  }
}
</script>
