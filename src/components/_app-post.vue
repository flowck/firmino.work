<template>
  <article :class="`app-post ${archiveSpacing}`">
    <div class="app-post__metadata">
      <div v-if="showDate" class="app-post__metadata__item">
        {{ post.createdAt | formatDate }}
      </div>
    </div>
    <h1 class="app-post__title font-heading">
      <router-link :to="{ name: 'Post', params: { id: `${post.slug}__${post.id}` } }">
        {{ post.title }}
      </router-link>
    </h1>
    <div class="app-post__content" v-if="showExcerpt" v-html="post.excerpt"></div>
    <div class="app-post__content" v-if="isFull" v-html="post.content"></div>
  </article>
</template>

<script lang="ts">
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import { IPost } from "@/store/modules/postModule/IPost";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostPreview extends Vue {
  @Prop({ required: true })
  private post!: IPost;

  @Prop({ default: false })
  private isFull!: boolean;

  @Prop({ default: true })
  private showExcerpt!: boolean;

  @Prop({ default: true })
  private showDate!: boolean;

  get isArchive() {
    return !this.showDate && !this.showExcerpt && !this.isFull;
  }

  get archiveSpacing() {
    return this.isArchive ? "app-post--is-archive" : "";
  }

  private mounted() {
    Prism.highlightAll();
  }
}
</script>

<style lang="scss">
.app-post {
  @include app-spacing("margin-bottom", "l");

  &:last-child {
    margin-bottom: 0;
  }

  &--is-archive {
    @include app-spacing("margin-bottom", "s");

    .app-post__title {
      margin-bottom: 0;
    }
  }

  a {
    transition: color 0.5s;

    &:hover {
      color: $color-highlight;
    }
  }

  &__title {
    font-size: 25px;
    font-family: $font-heading-one, arial;
    @include app-spacing("margin-bottom", "m");

    @include mq-tablet {
      font-size: 20px;
    }
  }

  &__content {
    color: $color-grey--light;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $font-heading-one, arial;
      @include app-spacing("margin-top", "m");
      @include app-spacing("margin-bottom", "s");
    }

    h2 {
      font-size: 20px;
    }

    img {
      width: 100%;
      height: auto;
    }

    p {
      @include app-spacing("margin-top", "s");
      @include app-spacing("margin-bottom", "s");
    }

    ul,
    ol,
    pre,
    img,
    blockquote {
      @include app-spacing("margin-top", "m");
      @include app-spacing("margin-bottom", "m");
    }

    p code {
      border-radius: 2px;
      padding: 0 5px 2px 5px;
      background-color: $color-dark--light;
    }

    pre code {
      @include mq-tablet {
        font-size: 12px;
      }
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;

      ol {
        list-style: disc;
      }
    }

    ul,
    ol {
      margin-left: 16px;
      ol,
      ul {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    blockquote {
      border-radius: 2px;
      background-color: $color-dark--light;
      @include app-spacing("padding", "m");
    }
  }

  &__metadata {
    font-size: 12px;
    color: $color-grey;
    @include app-spacing("margin-bottom", "s");
  }
}
</style>
