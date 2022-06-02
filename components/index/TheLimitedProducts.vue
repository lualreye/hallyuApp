<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div class="w-full flex justify-center lg:justify-start items-center h-14">
      <div class="parenthesis w-11 h-11 relative">
        <first-type />
      </div>
      <h2 class="text-xl sm:text-4xl font-junegull text-textColor">
        Ofertas Flash
      </h2>
      <div class="parenthesis-two w-11 h-11 relative">
        <first-type />
      </div>
    </div>
    <!-- RENDERIZADO DE TARJETAS DE PRODUCTOS LIMITADOS -->
    <div class="flex justify-start mt-8 py-12 pl-6 items-center overflow-x-scroll product-container">
      <div
        v-for="(product, i) in urgentProducts"
        :key="i"
        class="flex justify-center items-center mr-6 w-64 h-64 p-6"
      >
        <urgent-product-card
          :image="product.thumbnail"
          :stock="product.stock"
          :productName="product.name"
          :timesLeft="product.offer.time"
          :state="product.published"
          :link="product.id"
          :id="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FirstType from "~/components/parenthesis/FirstType.vue";
import UrgentProductCard from "~/components/cards/UrgentProductCard.vue";
export default {
  components: {
    FirstType,
    UrgentProductCard,
  },
  props: {
    urgentProducts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.parenthesis {
  transform: rotate(50.95deg);
}
.parenthesis-two {
  transform: rotate(200.95deg);
}

.product-container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.product-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>
