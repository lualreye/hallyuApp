<template>
  <button class="w-44 flex justify-center items-center bg-primary rounded-lg py-2" @click="upload">
    <div class="w-6 h-6 mr-1 flex jutify-center items-center">
      <GlobalHIcon name="newProduct" />
    </div>
    <p class="text-hBlack font-open">
      Nuevo Producto
    </p>
  </button>
</template>

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions("product", ["showProductModal"]),
    upload() {
      this.showProductModal(true)
    }
  }
}
</script>