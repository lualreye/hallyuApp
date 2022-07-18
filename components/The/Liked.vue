<template>
  <div
    v-if="getUser"
    class="
      bg-white
      fixed
      top-0
      bottom-0
      max-h-screen
      h-full
      w-2/3
      md:w-1/3
      rounded-l-3xl
      shadow-md
      z-50
      flex flex-col
      transition-all
    "
    :class="{
      'right-0': getLiked,
      '-right-2/3': !getLiked,
    }"
  >
    <div class="w-full px-4 flex justify-end items-center py-3 relative">
      <div class="w-full absolute top-0 left-0 right-0 bottom-0 z-60">
        <wave-one />
      </div>
      <button
        class="
          bg-transparent
          w-6
          h-6
          flex
          justify-center
          items-center
          rounded-full
          z-70
        "
        @click="closeLikedProducts"
      >
        <GlobalHIcon name="close" class="text-gray-400 w-full" />
      </button>
    </div>
    <p class="text-lg text-textColor font-junegull ml-1 my-2">Tus favoritos</p>
    <div
      v-if="getWishList.length"
      class="w-full flex flex-col justify-between flex-grow h-full pt-4 pb-10"
    >
      <nav
        class="
          flex flex-col
          justify-col
          items-center
          justify-start
          overflow-y-auto
          px-1
          py-2
        "
      >
        <ul class="w-full flex flex-col justify-start items-center pb-12">
          <li v-for="(item, i) in getWishList" :key="i" class="w-full">
            <liked-product :product="item" />
          </li>
        </ul>
      </nav>
    </div>
    <div v-else class="w-full flex flex-grow justify-center items-center">
      <p class="text-textColor font-junegull">Aún no tienes favoritos</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WaveOne from "@/components/waves/WaveOne.vue";
import LikedProduct from "../cards/LikedProduct.vue";
export default {
  components: {
    WaveOne,
    LikedProduct,
  },
  computed: {
    ...mapGetters("likes", ["getLiked", "getWishList"]),
    ...mapGetters("user", ["getUser"]),
  },
  watch: {
    getUser(value) {
      if (value !== null) {
        this.fetchLikedProducts();
      }
    },
  },
  methods: {
    ...mapActions("likes", ["showLikedProducts", "fetchLikedProducts"]),
    closeLikedProducts() {
      if (this.getLiked) {
        this.showLikedProducts(false);
      } else {
        return;
      }
    },
  },
};
</script>
