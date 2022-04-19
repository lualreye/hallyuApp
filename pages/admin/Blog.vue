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
          <!-- UPLOAD POST IMAGE -->
          <div
            class="w-full sm:w-1/3 md:w-1/4 flex justify-center items-center"
          >
            <div class="w-full flex justify-center items-center flex-col">
              <label class="w-full text-textColor font-open text-xs">
                Portada
              </label>
              <div
                class="relative h-32 w-full border border-primary rounded-lg flex justify-center items-center"
              >
                <input
                  type="file"
                  class="h-32 w-full absolute top-0 bottom-0 left-0 opacity-0 z-60"
                  @change="uploadPostImage"
                />
                <div
                  v-if="!isImage"
                  class="w-full flex justify-center items-center"
                >
                  <img
                    :src="image.url"
                    class="w-full h-32 object-cover object-center rounded-lg"
                  />
                </div>
                <div
                  v-else
                  class="w-full text-textColor flex justify-center items-center"
                >
                  <div class="w-6 h-6 flex justify-center items-center mr-2">
                    <GlobalHIcon name="upload" class="text-textColor" />
                  </div>
                  <p class="text textColor text-xs">Sube una imagen</p>
                </div>
              </div>
            </div>
          </div>
          <!-- UPLOAD POST CONTENT -->
          <div
            class="w-full sm:w-2/3 md:w-3/4 flex flex-col justify-center items-center"
          >
            <input
              type="text"
              v-model="title"
              class="border border-primary rounded-lg py-2 px-2 text-textColor font-open font-medium mb-2 outline-none focus:outline-none"
            />
            <div class="w-full flex justify-center items-center"></div>
          </div>
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
            :disabled="!!isReadyToUpload"
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
  computed: {
    isImage() {
      return this.image.url === null;
    },
    isReadyToUpload() {
      return this.image.object !== null &&
        this.title !== null &&
        this.title !== "" &&
        this.body !== null &&
        this.body !== ""
        ? true
        : false;
    },
  },
  methods: {
    editPost() {
      if (this.isEditingPost) {
        this.isEditingPost = false;
      } else {
        this.isEditingPost = true;
      }
    },
    uploadPostImage(e) {
      const file = e.target.files[0];
      const imgObj = file;
      const imgUrl = URL.createObjectURL(file);
      this.image.url = imgUrl;
      this.image.object = imgObj;
    },
    savePost() {
      const day = new Date();
      const post = {
        image: this.image.object,
        title: this.title,
        body: this.body,
        date: day.getDate(),
      };
      console.log(post);
    },
  },
};
</script>
