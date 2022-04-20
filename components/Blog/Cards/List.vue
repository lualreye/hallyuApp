<template>
  <div
    class="w-full flex justify-center items-center rounded-lg shadow-md px-2 py-3 bg-background border border-aquamarine"
  >
    <div class="w-full flex flex-col justify-center items-center">
      <div class="w-full flex justify-between items-center">
        <p class="text-base font-open text-textColor">Título del blog</p>
        <p class="text-base font-open text-textColor">Fecha de publicación</p>
      </div>
      <div class="bg-primary h-px w-full" />
      <div class="w-full flex flex-col justify-center items-center my-2">
        <BlogDetail
          v-for="(post, index) in posts"
          :key="index"
          :image="post.image"
          :postName="post.name"
          :date="post.date"
          :id="post.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>
