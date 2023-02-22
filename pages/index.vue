<template>
  <div class="w-full mx-auto">
    <the-hero
      v-if="getHero.length"
      :image="getHero"
      class="max-w-screen-2xl mx-auto my-4"
    />
    <the-line-decoration
      v-if="areQuotes && getFlashProducts.length"
      :bgColor="getQuotes.hero.bgColor"
      :letterColor="getQuotes.hero.textColor"
      :koreanText="getQuotes.hero.koreanText"
      :spanishText="getQuotes.hero.spanishText"
      class="mt-4"
    />
    <the-limited-products
      v-if="getFlashProducts.length"
      :urgentProducts="getFlashProducts.slice(0, 4)"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.flash.bgColor"
      :letterColor="getQuotes.flash.textColor"
      :koreanText="getQuotes.flash.koreanText"
      :spanishText="getQuotes.flash.spanishText"
    />
    <the-favourites
      v-if="getProductsCommented.length"
      :comments="getProductsCommented.slice(0, 4)"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes && getDiscountProducts.length"
      :bgColor="getQuotes.popular.bgColor"
      :letterColor="getQuotes.popular.textColor"
      :koreanText="getQuotes.popular.koreanText"
      :spanishText="getQuotes.popular.spanishText"
    />
    <the-offers
      v-if="getDiscountProducts.length"
      :offers="getDiscountProducts.slice(0, 4)"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.simpleOffer.bgColor"
      :letterColor="getQuotes.simpleOffer.textColor"
      :koreanText="getQuotes.simpleOffer.koreanText"
      :spanishText="getQuotes.simpleOffer.spanishText"
    />
    <the-new-products
      v-if="getNewProducts.length"
      :newProductsArray="getNewProducts.slice(0, 4)"
      class="mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.community.bgColor"
      :letterColor="getQuotes.community.textColor"
      :koreanText="getQuotes.community.koreanText"
      :spanishText="getQuotes.community.spanishText"
    />
    <the-categories
      v-if="getCategories.length"
      :categories="getCategories"
      class="max-w-screen-2xl mx-auto"
    />
    <the-cta v-if="user" class="mx-auto" />
    <the-club />
    <the-blog
      v-if="arePosts"
      :posts="getPosts.slice(0, 3)"
      class="w-full mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.blog.bgColor"
      :letterColor="getQuotes.blog.textColor"
      :koreanText="getQuotes.blog.koreanText"
      :spanishText="getQuotes.blog.spanishText"
    />
    <the-community
      v-if="areFans"
      :instagramProfiles="getFans.slice(0, 4)"
      class="max-w-screen-2xl mx-auto"
    />
    <the-line-decoration
      v-if="areQuotes"
      :bgColor="getQuotes.communityFavs.bgColor"
      :letterColor="getQuotes.communityFavs.textColor"
      :koreanText="getQuotes.communityFavs.koreanText"
      :spanishText="getQuotes.communityFavs.spanishText"
    />
    <the-bands v-if="areBands" :bands="getBands.slice(0, 10)" class="mx-auto" />
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
import TheClub from "../components/index/TheClub.vue";
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
    TheClub,
  },
  data: () => ({
    heroImage: "",
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
    if (!this.getDiscountProducts.length) {
      this.fetchDiscountProducts();
    }
    if (!this.getNewProducts.length) {
      this.fetchNewProducts();
    }
    if (!this.getBands.length) {
      this.fetchBands();
    }
    if (!this.getFans.length) {
      this.fetchFans();
    }
    if (!this.getPosts.length) {
      this.fetchPosts();
    }
    if (!this.getPosts.length) {
      this.fetchCategories();
    }
    if (!this.getGreetings.length) {
      this.fetchGreetings();
    }
    if (!this.getCommunityGreeting.length) {
      this.fetchCommunityGreetings();
    }
    if (!this.getProductsCommented.length) {
      this.fetchCommentedProducts();
    }
  },
  computed: {
    ...mapGetters("general", [
      "getHeroImages",
      "getHero",
      "getGreetings",
      "getCommunityGreeting",
    ]),
    ...mapGetters("quotes", ["getQuotes"]),
    ...mapGetters("bands", ["getBands"]),
    ...mapGetters("fans", ["getFans"]),
    ...mapGetters("blog", ["getPosts"]),
    ...mapGetters("cart", [
      "getFlashProducts",
      "getDiscountProducts",
      "getNewProducts",
    ]),
    ...mapGetters("categories", ["getCategories"]),
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("comments", ["getProductsCommented"]),
    areThereHeroImages() {
      return this.getHeroImages.length === 0 ? false : true;
    },
    areQuotes() {
      return Object.keys(this.getQuotes).length !== 0;
    },
    areBands() {
      return this.getBands.length;
    },
    areFans() {
      return this.getFans.length;
    },
    arePosts() {
      return this.getPosts.length;
    },
    user() {
      if (this.getUser !== null || this.getUser === undefined) {
        return false;
      }
      return true;
    },
  },
  watch: {
    areThereHeroImages(value) {
      if (value) {
        this.heroImage =
          this.getHeroImages[
            Math.floor(this.randomNumber(this.getHeroImages.length))
          ].image;
        this.selectHero(this.heroImage);
      }
    },
    user(value) {
      return value === null || value === undefined ? false : true;
    },
  },
  methods: {
    ...mapActions("general", [
      "fetchImages",
      "selectHero",
      "fetchGreetings",
      "fetchCommunityGreetings",
    ]),
    ...mapActions("quotes", ["fetchQuotes"]),
    ...mapActions("bands", ["fetchBands"]),
    ...mapActions("fans", ["fetchFans"]),
    ...mapActions("blog", ["fetchPosts"]),
    ...mapActions("cart", [
      "fetchFlashProducts",
      "fetchDiscountProducts",
      "fetchNewProducts",
    ]),
    ...mapActions("categories", ["fetchCategories"]),
    ...mapActions("comments", ["fetchCommentedProducts"]),
    randomNumber(max) {
      return Math.random() * (max - 0) + 0;
    },
  },
};
</script>
