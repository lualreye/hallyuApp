<template>
  <div
    class="w-full flex justify-between items-center hover:bg-primary rounded-lg p-2"
  >
    <div class="w-auto flex justify-start items-center">
      <div
        class="w-8 h-8 mr-3 bg-aquamarine flex justify-center items-center rounded-lg"
      >
        <img
          :src="image"
          class="w-full h-8 rounded-lg object-cover object-center"
        />
      </div>
      <p class="text-textColor font-open">
        {{ postName }}
      </p>
    </div>
    <div class="w-auto flex justify-center items-center">
      <p class="text-textColor font-light text-sm mr-2">{{ date }}</p>
      <button
        class="w-6 h-6 flex justify-center items-center mr-2"
        @click="editPs"
      >
        <GlobalHIcon name="edit" class="text-textColor hover:text-secondary" />
      </button>
      <button
        class="w-6 h-6 flex justify-center items-center"
        @click="deletePs"
      >
        <GlobalHIcon name="delete" class="text-textColor hover:text-pink-600" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: "",
    },
    postName: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
    id: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("blog", ["deletePost", "editPost", "resetEditingPost"]),
    deletePs() {
      this.deletePost(this.id);
    },
    editPs() {
      this.resetEditingPost()
      this.editPost(this.id);
    },
  },
};
</script>
