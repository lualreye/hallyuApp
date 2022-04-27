<template>
  <div class="w-full mx-auto">
    <the-hero :image="heroImage" class="max-w-screen-2xl" />
    <the-line-decoration />
    <the-limited-products
      :urgentProducts="urgentProducts"
      class="max-w-screen-2xl"
    />
    <the-line-decoration />
    <the-favourites :comments="comments" class="max-w-screen-2xl" />
    <the-line-decoration />
    <the-offers :offers="offers" class="max-w-screen-2xl" />
    <the-line-decoration />
    <the-new-products
      :newProductsArray="newProducts"
      class="max-w-screen-2xl"
    />
    <the-line-decoration />
    <the-categories :categories="categories" class="max-w-screen-2xl" />
    <the-cta class="max-w-screen-2xl" />
    <the-blog :posts="posts" class="max-w-screen-2xl" />
    <the-line-decoration />
    <the-community
      :instagramProfiles="instagramProfiles"
      class="max-w-screen-2xl"
    />
    <the-line-decoration />
    <the-bands :bands="bands" class="max-w-screen-2xl" />
  </div>
</template>

<script>
import TheHero from "~/components/index/TheHero.vue";
import TheLimitedProducts from "~/components/index/TheLimitedProducts.vue";
import TheFavourites from "~/components/index/TheFavourites.vue";
import TheOffers from "~/components/index/TheOffers";
import TheNewProducts from "~/components/index/TheNewProducts";
import TheCategories from "~/components/index/TheCategories.vue";
import TheCta from "~/components/index/TheCta.vue";
import TheBlog from "../components/index/TheBlog.vue";
import TheCommunity from "../components/index/TheCommunity.vue";
import TheBands from "~/components/index/TheBands.vue";
import TheLineDecoration from "../components/index/TheLineDecoration.vue";
export default {
  components: {
    TheHero,
    TheLimitedProducts,
    TheFavourites,
    TheOffers,
    TheNewProducts,
    TheCategories,
    TheCta,
    TheBlog,
    TheCommunity,
    TheBands,
    TheLineDecoration,
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
        price: 25,
        discount: 10,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Esto es un producto",
        state: true,
        link: "hola",
      },
      {
        price: 25,
        discount: 10,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Esto es un producto",
        state: true,
        link: "hola",
      },
      {
        price: 25,
        discount: 10,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Esto es un producto",
        state: true,
        link: "hola",
      },
      {
        price: 25,
        discount: 10,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Esto es un producto",
        state: true,
        link: "hola",
      },
      {
        price: 25,
        discount: 10,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Esto es un producto",
        state: true,
        link: "hola",
      },
    ],
    newProducts: [
      {
        link: "hola",
        price: 36,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Este es un nombre de producto",
      },
      {
        link: "hola",
        price: 36,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Este es un nombre de producto",
      },
      {
        link: "hola",
        price: 36,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Este es un nombre de producto",
      },
      {
        link: "hola",
        price: 36,
        image: require("~/static/images/idols/han.jpg"),
        productName: "Este es un nombre de producto",
      },
    ],
    categories: [
      {
        image: require("~/static/images/idols/han.jpg"),
        categoryName: "Super Categoria",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        categoryName: "Super Categoria",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        categoryName: "Super Categoria",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        categoryName: "Super Categoria",
      },
      {
        image: require("~/static/images/idols/han.jpg"),
        categoryName: "Super Categoria",
      },
    ],
    posts: [
      {
        title: "Este es un titulo increible",
        abstract:
          "Esta es una descripcion o un resumen increible de lo que se pude hacer dentro de la seccion del post",
        thumbnail: require("~/static/images/idols/han.jpg"),
        authorName: "Luis Reyes",
        authorImage: require("~/static/images/idols/han.jpg"),
        id: "hola",
        date: "2/02/2021",
      },
    ],
    instagramProfiles: [
      {
        instagramUserImage: require("~/static/images/idols/han.jpg"),
        instagramUserName: "luis",
      },
      {
        instagramUserImage: require("~/static/images/idols/han.jpg"),
        instagramUserName: "luis",
      },
      {
        instagramUserImage: require("~/static/images/bands/BTS.svg"),
        instagramUserName: "luis",
      },
      {
        instagramUserImage: require("~/static/images/idols/han.jpg"),
        instagramUserName: "luis",
      },
    ],
    bands: [
      {
        bandImage: require("~/static/images/bands/BTS.svg"),
        bandName: "BTS",
      },
      {
        bandImage: require("~/static/images/bands/BP.svg"),
        bandName: "BLACKPINK",
      },
      {
        bandImage: require("~/static/images/bands/BTS.svg"),
        bandName: "BTS",
      },
      {
        bandImage: require("~/static/images/bands/BP.svg"),
        bandName: "BLACKPINK",
      },
      {
        bandImage: require("~/static/images/bands/BTS.svg"),
        bandName: "BTS",
      },
      {
        bandImage: require("~/static/images/bands/BP.svg"),
        bandName: "BLACKPINK",
      },
    ],
  }),
};
</script>
