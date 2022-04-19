<template>
  <div class="w-full flex flex-col shrink justify-center items-center">
    <!-- BUTTON EDIT POST -->
    <div class="w-full flex justify-start items-center my-2">
      <button class="w-auto mr-2 flex justify-between items-center" @click="editPost">
        <div class="w-6 h-6 flex justify-center items-center">
          <GlobalHIcon name="plus" class="text-textColor" />
        </div>
        <p class="text-textColor font-open">nuevo blog</p>
      </button>
    </div>
    <div v-if="isEditingPost" class="w-full flex justify-center items-center my-2">
      Edicion de post
    </div>
    <!-- POSTS LIST -->
    <div class="w-full max-w-2xl flex flex-col justify-center items-center my-2">
      <BlogCardsList />
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
  data: () => ({
    isEditingPost: false,
  }),
  methods: {
    editPost() {
      if (this.isEditingPost) {
        this.isEditingPost = false;
      } else {
        this.isEditingPost = true;
      }
    },
  },
};
</script>
