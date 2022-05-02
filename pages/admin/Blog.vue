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
      v-if="getIsEditing"
      class="w-full max-w-3xl flex justify-center items-center my-2"
    >
      <div class="w-full flex flex-col justify-center items-center">
        <!-- EDITOR -->
        <div class="w-full flex flex-wrap justify-center items-start">
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
            class="w-full sm:w-2/3 md:w-3/4 flex flex-col justify-center items-center px-2"
          >
            <!-- TITLE -->
            <label class="w-full text-textColor text-xs font-open"
              >Título</label
            >
            <input
              type="text"
              v-model="title"
              class="w-full border border-primary rounded-lg py-2 px-2 text-textColor font-open font-medium mb-3 outline-none focus:outline-none"
            />
            <!-- DESCRIPTION -->
            <label class="w-full text-textColor text-xs font-open"
              >Descripción</label
            >
            <textarea
              type="text"
              v-model="description"
              class="w-full border border-primary rounded-lg py-2 px-2 text-textColor font-open font-medium mb-3 outline-none focus:outline-none"
            />
            <!-- BODY -->
            <label class="w-full text-textColor text-xs font-open"
              >Contenido</label
            >
            <div
              class="w-full flex justify-center items-center border border-primary rounded-lg p-2"
            >
              <vue-editor v-model="body" :editor-toolbar="customToolbar" />
            </div>
          </div>
        </div>
        <!-- BUTTONS -->
        <div class="w-full flex justify-end items-center my-2 p-2">
          <button
            class="w-44 py-2 rounded-lg flex justify-center text-textColor items-center mr-2 bg-lightPink"
            @click="editPost"
          >
            Cancelar
          </button>
          <button
            class="w-44 py-2 rounded-lg flex justify-center items-center text-textColor"
            :class="{
              'bg-primary': isReadyToUpload,
              'bg-gray-400': !isReadyToUpload,
            }"
            :disabled="!isReadyToUpload"
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
      <BlogCardsList :posts="getPosts" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "app",
  data: () => ({
    title: "",
    image: {
      url: null,
      object: null,
    },
    description: "",
    body: "",
    customToolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", { align: [] }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ color: [] }, { background: [] }],
      ["clean"],
      ["link", "formula"],
    ],
  }),
  computed: {
    ...mapGetters("blog", ["getPosts", "getIsEditing", "getEditingPost"]),
    isImage() {
      return this.image.url === null;
    },
    isReadyToUpload() {
      return this.image.url !== null &&
        this.title !== null &&
        this.title !== "" &&
        this.body !== null &&
        this.body !== "" &&
        this.description !== null &&
        this.description !== ""
        ? true
        : false;
    },
    isData() {
      return Object.keys(this.getEditingPost).length !== 0 ? true : false;
    },
  },
  watch: {
    isData(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setEditingData();
      }
    },
  },
  mounted() {
    if (!this.getPosts.length) {
      this.fetchPosts();
    } else {
      return;
    }
  },
  methods: {
    ...mapActions("blog", [
      "uploadPost",
      "fetchPosts",
      "resetEditingPost",
      "showEditing",
    ]),
    editPost() {
      if (this.getIsEditing) {
        this.showEditing(false);
        this.resetEditingPost();
      } else {
        this.showEditing(true);
        this.resetEditingPost();
      }
    },
    uploadPostImage(e) {
      const file = e.target.files[0];
      const imgObj = file;
      const imgUrl = URL.createObjectURL(file);
      this.image.url = imgUrl;
      this.image.object = imgObj;
    },
    setEditingData() {
      if (this.getIsEditing && Object.keys(this.getEditingPost).length) {
        const post = JSON.parse(JSON.stringify(this.getEditingPost));
        (this.title = post.title),
          (this.description = post.description),
          (this.body = post.body),
          (this.image.url = post.image);
      }
    },
    savePost() {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      let post;
      if (this.isData) {
        if (this.image.object instanceof File) {
          post = {
            image: this.image.object,
          };
        } else {
          post = {
            image: this.image.url
          }
        }
        post = {
          title: this.title,
          description: this.description,
          body: this.body,
          date: `${day}-${month + 1}-${year}`,
          ...post
        };
      } else {
        post = {
          image: this.image.object,
          title: this.title,
          description: this.description,
          body: this.body,
          date: `${day}-${month + 1}-${year}`,
        };
      }
      this.uploadPost(post);
      console.log(post)
    },
  },
};
</script>
