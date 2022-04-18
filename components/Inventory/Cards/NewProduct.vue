<template>
  <div
    v-if="getIsModalOpen"
    class="w-10/12 sm:w-3/4 max-w-4xl absolute top-20 left-1/12 sm:left-1/8 z-50 bg-background rounded-lg shadow-md"
  >
    <div class="w-full flex flex-col justify-center items-start p-2">
      <!-- CLOSE BUTTON -->
      <div class="w-full flex justify-end items-center">
        <button
          class="w-6 h-6 flex justify-center items-center"
          @click="closeProductModal"
        >
          <GlobalHIcon
            name="close"
            class="text-textColor hover:text-pink-700"
          />
        </button>
      </div>
      <!-- DATA -->
      <div class="w-full flex flex-wrap justify-center items-center">
        <div
          class="w-full sm:w-1/3 lg:w-1/5 p-2 flex justify-center items-center"
        >
          Aqui subiremos fotos
        </div>
        <div
          class="w-full sm:w-2/3 lg:w-4/5 flex flex-wrap justify-center items-center p-2"
        >
          <div class="w-full flex flex-col justify-center items-center">
            <div class="w-full flex justify-center items-center">
              Aqui va el nombre del producto
            </div>
            <div class="w-full flex justify-center items-center">
              Aqui va la descripcion del producto
            </div>
          </div>
          <div class="w-full flex justify-center items-center">
            <div class="w-full max-w-xs flex justify-center items-center">
              Banda
            </div>
            <div
              class="w-full max-w-xs flex flex-col justify-center items-center"
            >
              Categoria
            </div>
            <div
              class="w-full max-w-xs flex flex-col justify-center items-center"
            >
              tipo de oferta
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("product", ["getIsModalOpen"]),
  },
  methods: {
    ...mapActions("product", ["showProductModal"]),
    closeProductModal() {
      if (this.getIsModalOpen) {
        this.showProductModal(false);
      } else {
        this.showProductModal(true);
      }
    },
  },
};
</script>
