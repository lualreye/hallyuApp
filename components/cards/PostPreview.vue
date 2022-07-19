<template>
  <article
    class="w-full max-w-4xl flex justify-center items-center flex-wrap mx-auto"
  >
    <div class="w-full lg:w-3/5 flex flex-col justify-center items-center">
      <h3 class="text-textColor font-junegull text-2xl">
        {{ post.title }}
      </h3>
      <p class="text-textColot text-base font-open">
        {{ post.abtract }}
      </p>
      <div class="w-full flex justify-center items-center">
        <p class="text-textColor font-open">
          {{ post.authorName }}
        </p>
        <p class="text-textColor font-open">
          {{ post.date }}
        </p>
      </div>
    </div>
    <div class="w-full lg:w-2/5">
      <figure class="w-64 h-64">
        <img :src="post.image" :alt="post.title" />
      </figure>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    redirectionToPostDetail() {
      this.$router.push(`/blog/${this.id}`);
    },
  },
};
</script>
