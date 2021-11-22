<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div class="w-full flex justify-center lg:justify-start items-center h-14">
      <div class="parenthesis w-11 h-11 relative">
        <first-type />
      </div>
      <h2 class="text-xl sm:text-4xl font-junegull text-textColor">
        Hallyu on Clock
      </h2>
      <div class="parenthesis-two w-11 h-11 relative">
        <first-type />
      </div>
    </div>
    <!-- TARJETAS DE PRODUCTOS -->
    <div class="flex justify-start mt-8 py-16 pl-6 items-center overflow-x-scroll">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="flex justify-center items-center mr-6 w-64 h-64 p-6"
      >
        <urgent-product-card
          :image="product.image"
          :stock="product.stock"
          :productName="product.productName"
          :timesLeft="product.timesLeft"
          :state="product.state"
          :link="product.link"
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
  data: () => ({
    products: [
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 3,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola',
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 4,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola1',
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 6,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola',
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 5,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola',
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 5,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola',
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 5,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola',
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 5,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: 'hola',
      },
    ],
  }),
};
</script>

<style scoped>
.parenthesis {
  transform: rotate(50.95deg);
}
.parenthesis-two {
  transform: rotate(200.95deg);
}
</style>
