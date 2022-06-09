<template>
  <div class="w-full mx-auto">
    <the-hero
      v-if="heroImage.length"
      :image="heroImage"
      class="max-w-screen-2xl mx-auto my-4"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.hero.bgColor"
      :letterColor="getQuotes.hero.textColor"
      :koreanText="getQuotes.hero.koreanText"
      :spanishText="getQuotes.hero.spanishText"
      class="mt-4"
    />
    <the-limited-products
      v-if="getFlashProducts.length"
      :urgentProducts="getFlashProducts"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.flash.bgColor"
      :letterColor="getQuotes.flash.textColor"
      :koreanText="getQuotes.flash.koreanText"
      :spanishText="getQuotes.flash.spanishText"
    />
    <the-favourites :comments="comments" class="max-w-screen-2xl mx-auto" />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.popular.bgColor"
      :letterColor="getQuotes.popular.textColor"
      :koreanText="getQuotes.popular.koreanText"
      :spanishText="getQuotes.popular.spanishText"
    />
    <the-offers :offers="offers" class="max-w-screen-2xl mx-auto" />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.simpleOffer.bgColor"
      :letterColor="getQuotes.simpleOffer.textColor"
      :koreanText="getQuotes.simpleOffer.koreanText"
      :spanishText="getQuotes.simpleOffer.spanishText"
    />
    <the-new-products
      :newProductsArray="newProducts"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.community.bgColor"
      :letterColor="getQuotes.community.textColor"
      :koreanText="getQuotes.community.koreanText"
      :spanishText="getQuotes.community.spanishText"
    />
    <the-categories :categories="categories" class="max-w-screen-2xl mx-auto" />
    <the-cta class="mx-auto" />
    <the-blog :posts="posts" class="max-w-screen-2xl mx-auto" />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.blog.bgColor"
      :letterColor="getQuotes.blog.textColor"
      :koreanText="getQuotes.blog.koreanText"
      :spanishText="getQuotes.blog.spanishText"
    />
    <the-community
      :instagramProfiles="instagramProfiles"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.communityFavs.bgColor"
      :letterColor="getQuotes.communityFavs.textColor"
      :koreanText="getQuotes.communityFavs.koreanText"
      :spanishText="getQuotes.communityFavs.spanishText"
    />
    <the-bands :bands="bands" class="max-w-screen-2xl mx-auto" />
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
import { mapActions, mapGetters } from "vuex";
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
    heroImage: "",
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
  mounted() {
    if (!this.getHeroImages.length) {
      this.fetchImages();
    }
    if (!Object.keys(this.getQuotes).length) {
      this.fetchQuotes();
    }
    if (!this.getFlashProducts.length) {
      this.fetchFlashProducts();
    }
  },
  computed: {
    ...mapGetters("general", ["getHeroImages"]),
    ...mapGetters("quotes", ["getQuotes"]),
    ...mapGetters("cart", ["getFlashProducts"]),
    areThereHeroImages() {
      return this.getHeroImages.length === 0 ? false : true;
    },
    areQuotes() {
      return Object.keys(this.getQuotes).length !== 0;
    },
  },
  watch: {
    areThereHeroImages(value) {
      if (value) {
        this.heroImage =
          this.getHeroImages[
            Math.floor(this.randomNumber(this.getHeroImages.length))
          ].image;
      }
    },
  },
  methods: {
    ...mapActions("general", ["fetchImages"]),
    ...mapActions("quotes", ["fetchQuotes"]),
    ...mapActions("cart", ["fetchFlashProducts"]),
    randomNumber(max) {
      return Math.random() * (max - 0) + 0;
    },
  },
};
</script>
