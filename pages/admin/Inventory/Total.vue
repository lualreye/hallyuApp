<template>
  <div class="w-full max-w-5xl">
    <!-- LABELS -->
    <div
      class="w-full flex justify-center itesm-center divide-x divide-textColor"
    >
      <div
        class="w-2/5 md:w-3/12 flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      >
        Productos
      </div>
      <div
        class="w-2/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      >
        Categoría
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      >
        Stock
      </div>
      <div
        class="w-1/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      >
        Precio
      </div>
      <div
        class="w-1/5 md:w-1/12 flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      >
        Publicado
      </div>
      <div
        class="w-2/12 hidden md:flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      >
        Oferta
      </div>
      <div
        class="w-2/5 md:w-2/12 flex justify-center items-center text-hBlack text-xs md:text-sm font-open"
      ></div>
    </div>
    <!-- PRODUCTS -->
    <div v-if="getTotalProducts.length" class="w-full flex flex-col justify-center items-center mt-2">
      <InventoryCardsProductDetail
        v-for="(product, index) in getTotalProducts"
        :key="index"
        :name="product.name"
        :thumbnail="product.thumbnail"
        :stock="product.stock"
        :price="product.price"
        :category="product.category"
        :published="product.published"
        :offered="product.offered"
        :offer="product.offer"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("inventoryTotal", ["getTotalProducts"]),
  },
  mounted() {
    if(!this.getTotalProducts.length) {
      this.fetchProducts()
    }
  },
  methods: {
    ...mapActions("inventoryTotal", ["fetchProducts"]),
  },
};
</script>
