<template>
  <div class="w-full flex flex-col shrink justify-center items-center">
    <!-- BUTTON EDIT POST -->
    <div class="w-full flex justify-start items-center my-2">
      <button
        class="w-auto mr-2 flex justify-between items-center"
        @click="editPost"
      >
        <div class="w-6 h-6 flex justify-center items-center">
          <GlobalHIcon name="plus" class="text-textColor" />
        </div>
        <p class="text-textColor font-open">nuevo blog</p>
      </button>
    </div>
    <!-- POST EDITOR -->
    <div
      v-if="isEditingPost"
      class="w-full max-w-3xl flex justify-center items-center my-2"
    >
      <div class="w-full flex flex-col justify-center items-center">
        <!-- EDITOR -->
        <div class="w-full flex flex-wrap justify-center items-center">
          imagenes y cuerpo
        </div>
        <!-- BUTTONS -->
        <div class="w-full flex justify-end items-center my-2">
          <button
            class="w-44 py-2 rounded-lg flex justify-center text-textColor items-center mr-2 bg-lightPink"
            @click="editPost"
          >
            Cancelar
          </button>
          <button
            class="w-44 py-2 rounded-lg flex justify-center items-center text-textColor bg-primary"
            @click="savePost"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
    <!-- POSTS LIST -->
    <div
      class="w-full max-w-2xl flex flex-col justify-center items-center my-2"
    >
      <BlogCardsList />
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
  data: () => ({
    isEditingPost: false,
    title: "",
    image: {
      url: null,
      object: null,
    },
    body: "",
  }),
  methods: {
    editPost() {
      if (this.isEditingPost) {
        this.isEditingPost = false;
      } else {
        this.isEditingPost = true;
      }
    },
    savePost() {
      const post = {
        image: this.image.object,
        title: this.title,
        body: this.body,
      };
      console.log(post);
    },
  },
};
</script>
