<template>
  <div
    class="w-full flex justify-center items-center rounded-lg shadow-md p-2 bg-background"
  >
    <div class="w-full flex flex-col justify-center items-center">
      <div class="w-full flex justify-between items-center">
        <p class="text-base font-open text-textColor">Título del blog</p>
        <p class="text-base font-open text-textColor">Fecha de publicación</p>
      </div>
      <div class="bg-primary h-px w-full" />
      <div class="w-full flex flex-col justify-center items-center my-2">
        <BlogDetail />
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
