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
    <button class="w-6 h-6 flex justify-center items-center mr-4" @click="editModalIsOpen = !editModalIsOpen">
      <GlobalHIcon name="edit" class="text-textColor hover:text-yellow" />
    </button>
    <button class="w-6 h-6 flex justify-center items-center" @click="deleteCat">
      <GlobalHIcon name="delete" class="text-textColor hover:text-pink-600" />
    </button>
    <EditCategory
      v-if="editModalIsOpen"
      :image="image"
      :categoryName="categoryName"
      :id="id"
      :subCats="subCats"
      :sales="sales"
      @close-modal="editModalIsOpen = !editModalIsOpen"
      @editing-category="editingCategory($event)" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import EditCategory from "../modals/EditCategory.vue";

export default {
  components: { EditCategory },
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
    subCats: {
      type: Array,
      required: false,
      default: []
    },
    sales: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    editModalIsOpen: false
  }), 
  methods: {
      ...mapActions("categories", ["deleteCategory"]),
      deleteCat() {
          this.deleteCategory(this.id);
      },
      editingCategory(value) {
          this.$emit("editing-category", value);
      }
  },
};
</script>
