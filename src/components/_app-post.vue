<template>
  <article class="app-post">
    <div class="app-post__metadata">
      <div class="app-post__metadata__item">
        {{ post.createdAt | formatDate }}
      </div>
    </div>
    <h1 class="app-post__title font-heading">
      <router-link :to="{ name: 'Post', params: { id: `${post.slug}__${post.id}` } }">
        {{ post.title }}
      </router-link>
    </h1>
    <div class="app-post__content" v-if="!isFull" v-html="post.excerpt"></div>
    <div class="app-post__content" v-else v-html="post.content"></div>
  </article>
</template>

<script lang="ts">
import { IPost } from "@/store/modules/postModule/IPost";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostPreview extends Vue {
  @Prop({ required: true })
  private post!: IPost;

  @Prop({ default: false })
  private isFull!: boolean;
}
</script>

<style lang="scss">
.app-post {
  font-family: $font-body;

  a {
    transition: color 0.5s;

    &:hover {
      color: $color-highlight;
    }
  }

  &__title {
    @include app-spacing("margin-bottom", "m");
  }

  &:not(:last-child) {
    @include app-spacing("margin-bottom", "l");
  }

  &__content {
    color: $color-grey--light;

    p {
      line-height: 1.8;
    }

    img {
      width: 100%;
      height: auto;
      @include app-spacing("margin", "m");
    }
  }

  &__metadata {
    font-size: 12px;
    color: $color-grey;
    @include app-spacing("margin-bottom", "s");
  }
}
</style>
