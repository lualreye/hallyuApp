<template>
  <div class="w-full max-w-screen-2xl mx-auto">
    <the-hero :image="heroImage" />
    <the-limited-products :urgentProducts="urgentProducts" />
    <the-favourites :comments="comments" />
    <the-offers :offers="offers" />
  </div>
</template>

<script>
import TheHero from "~/components/index/TheHero.vue";
import TheLimitedProducts from "~/components/index/TheLimitedProducts.vue";
import TheFavourites from "~/components/index/TheFavourites.vue";
import TheOffers from "~/components/index/TheOffers"
export default {
  components: {
    TheHero,
    TheLimitedProducts,
    TheFavourites,
    TheOffers
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
    comments: [
      {
        comment:
          "Este es un comentario de prueba en el que vamos a trabajar mucho",

        userName: "Luis Reyes",
        profileImage: require("~/static/images/idols/han.jpg"),
        productImage: require("~/static/images/idols/han.jpg"),
        productName: "Este es el nombre",
        read: false,
        rate: 3,
      },
      {
        comment:
          "Este es un comentario de prueba en el que vamos a trabajar mucho",

        userName: "Luis Reyes",
        profileImage: require("~/static/images/idols/han.jpg"),
        productImage: require("~/static/images/idols/han.jpg"),
        productName: "Este es el nombre",
        read: false,
        rate: 3,
      },
      {
        comment:
          "Este es un comentario de prueba en el que vamos a trabajar mucho",

        userName: "Luis Reyes",
        profileImage: require("~/static/images/idols/han.jpg"),
        productImage: require("~/static/images/idols/han.jpg"),
        productName: "Este es el nombre",
        read: false,
        rate: 3,
      },
    ],
    offers: [
      {
        price:25,
        discount:10,
        image: require('~/static/images/idols/han.jpg'),
        productName: 'Esto es un producto',
        state: true,
        link: 'hola'
      },
      {
        price:25,
        discount:10,
        image: require('~/static/images/idols/han.jpg'),
        productName: 'Esto es un producto',
        state: true,
        link: 'hola'
      },
      {
        price:25,
        discount:10,
        image: require('~/static/images/idols/han.jpg'),
        productName: 'Esto es un producto',
        state: true,
        link: 'hola'
      },
      {
        price:25,
        discount:10,
        image: require('~/static/images/idols/han.jpg'),
        productName: 'Esto es un producto',
        state: true,
        link: 'hola'
      },
      {
        price:25,
        discount:10,
        image: require('~/static/images/idols/han.jpg'),
        productName: 'Esto es un producto',
        state: true,
        link: 'hola'
      },
    ]
  }),
};
</script>
