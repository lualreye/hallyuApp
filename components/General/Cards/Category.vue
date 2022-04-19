<template>
  <div
    class="w-full flex justify-between items-center hover:bg-primary rounded-lg p-2"
  >
    <div class="w-full flex justify-start items-center">
      <div
        class="w-8 h-8 mr-3 bg-aquamarine flex justify-center items-center rounded-lg"
      >
        <img
          :src="image"
          class="w-full h-8 rounded-lg object-cover object-center"
        />
      </div>
      <p class="text-textColor font-open">
        {{ categoryName }}
      </p>
    </div>
    <button class="w-6 h-6 flex justify-center items-center" @click="deleteCat">
      <GlobalHIcon name="delete" class="text-textColor hover:text-pink-600" />
    </button>
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
    categoryName: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("categories", ["deleteCategory"]),
    deleteCat() {
      this.deleteCategory(this.id);
    },
  },
};
</script>
