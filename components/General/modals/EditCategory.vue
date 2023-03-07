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
    <div class="w-full flex my-8">
      <button
        v-if="isAddingSubCat"
        class="flex text-textColor"
        @click="isAddingSubCat = !isAddingSubCat">
        Agregar sub categoria
        <div class="w-6 h-6">
          <GlobalHIcon name="plus" class="text-textColor" />
        </div>
      </button>
      <div v-else class="flex justify-center items-center gap-2 relative">
        <input
            v-model="subCategory"
            type="text"
            class="w-full p-2 text-textColor border border-primary rounded-lg outline-none"
          />
        <button class="flex w-auto items-center" @click="addSubCategory">
          Agregar
          <div class="w-6 h-6">
            <GlobalHIcon name="plus" class="text-textColor" />
          </div>
        </button>
        <button class="w-6 h-6 -top-4 -left-4 absolute" @click="isAddingSubCat = !isAddingSubCat">
          <GlobalHIcon name="close" class="text-red-600" />
        </button>
      </div>
    </div>
    <div v-if="category.subCats.length" class="my-6">
      <p
        v-for="(subCat, i) in subCats"
        :key="i">
        {{ subCat }}
      </p>
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
    },
    sales: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    category: {
      name: '',
      subCats: []
    },
    isAddingSubCat: false,
    subCategory: ''
  }),
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    editCategory() {
      const categoryEdited = {
        categoryName: this.category.name,
        image: this.image,
        id: this.id,
        subCats: this.category.subCats,
        sales: this.sales
      }
      this.$emit('editing-category', categoryEdited)
      this.closeModal()
    },
    addSubCategory() {
      const subCat = this.subCategory.trim()
      if (!subCat.length) {
        return
      }

      const subCatExists = this.category.subCats.find(e => e === subCat)
      if (subCatExists) {
        return
      }

      this.category.subCats.push(subCat)
      this.subCategory = ""
    }
  },
  mounted() {
    this.category.name = this.categoryName
    this.category.subCats = this.subCats
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