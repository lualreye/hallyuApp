<template>
  <div class="category-modal w-1/2 bg-white rounded-md p-4 shadow-lg border-blue-500">
    <div class="w-full flex items-center justify-end mb-2">
      <button class="w-6 h-6" @click="closeModal">
        <GlobalHIcon name="close" class="text-textColor hover:text-pink-600" />
      </button>
    </div>
    <div class="w-full flex flex-wrap justify-between itesm-center">
      <img :src="image" class="w-56 h-56" alt="category-name object-cover">
      <div class="w-full sm:w-1/2 flex flex-col justify-center items-center">
        <label class="w-full text-textColor font-open text-xs">
          Nombre
        </label>
        <input
          v-model="category.name"
          type="text"
          class="w-full p-2 text-textColor border border-primary rounded-lg outline-none"
        />
      </div>
    </div>
    <div class="w-full flex flex-col justiy-center items-center">
      <button
        class="w-40 bg-primary flex justify-center items-center rounded-lg py-2 mt-2"
        @click="editCategory"
      >
        <p class="text-textColor font-open">Guardar y Publicar</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    subCats: {
      type: Array,
      required: false,
      default: null
    }
  },
  data: () => ({
    category: {
      name: ''
    }
  }),
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    editCategory() {
      const categoryEdited = {
        categoryName: this.categoryName,
        image: this.image,
        id: this.id,
        subCats: {

        }
      }
      console.log(categoryEdited)
      this.$emit('editing-category', categoryEdited)
      this.closeModal()
    }
  },
  mounted() {
    this.category.name = this.categoryName
  }
}
</script>

<style>
  .category-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
</style>