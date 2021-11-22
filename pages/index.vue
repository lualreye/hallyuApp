<template>
  <div class="w-full max-w-screen-2xl mx-auto">
    <the-hero :image="heroImage" />
    <the-limited-products :urgentProducts="urgentProducts" />
  </div>
</template>

<script>
import TheHero from "~/components/index/TheHero.vue";
import TheLimitedProducts from "~/components/index/TheLimitedProducts.vue";
export default {
  components: {
    TheHero,
    TheLimitedProducts,
  },
  data: () => ({
    heroImage: require("~/static/images/idols/han.jpg"),
    urgentProducts: [
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 3,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: "hola",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 4,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: "hola1",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 6,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: "hola",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 5,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: "hola",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        stock: 5,
        timesLeft: 100000000,
        productName: "Nombre del producto",
        state: true,
        link: "hola",
      },
    ],
  }),
};
</script>
