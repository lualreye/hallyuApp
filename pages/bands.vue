<template>
  <div>
    <div class="w-full">
      <figure class="w-full h-60 mx-auto">
        <img
          v-if="getBandImage.length"
          :src="getBandImage"
          class="mask h-60 object-cover w-full object-top"
        />
      </figure>
      <nav class="w-full max-w-4xl mx-auto px-2 my-4">
        <ul
          class="
            w-full
            flex
            justify-between
            items-center
            px-2
            overflow-auto
            py-4
          "
        >
          <li
            class="flex-shrink-0 text-textColor font-junegull mr-6"
            @click="resetBand"
          >
            <nuxt-link to="/bands" class="relative">
              <p class="text-textColor font-junegull relative z-10">Todas</p>
              <span
                class="
                  z-0
                  w-full
                  h-4
                  xl:h-5
                  bg-lightPink
                  absolute
                  rounded-lg
                  bottom-1
                  right-0
                "
                :class="{ 'opacity-0': !getIndex(), 'opacity-1': getIndex() }"
              ></span>
            </nuxt-link>
          </li>
          <li
            v-for="(band, i) in getBands"
            :key="i"
            class="flex-shrink-0 text-textColor font-junegull mr-6 relative"
            @click="selectBand(band.name)"
          >
            <nuxt-link :to="`/bands/${band.name}`" class="relative">
              <p class="text-textColor font-junegull relative z-10">
                {{ band.name }}
              </p>
              <span
                class="
                  z-0
                  w-full
                  h-4
                  xl:h-5
                  bg-lightPink
                  absolute
                  rounded-lg
                  bottom-1
                  right-0
                "
                :class="{
                  'opacity-0': !getUrl(band.name),
                  'opacity-1': getUrl(band.name),
                }"
              ></span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="!getParams" class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack
        :column-min-width="getCardWidth"
        :gutter-width="8"
        :gutter-height="24"
        monitor-images-loaded
      >
        <stack-item
          v-for="(product, index) in getProductsWithBand"
          :key="index"
          class="flex justify-center"
        >
          <product-card :product="product" />
        </stack-item>
      </stack>
    </div>
    <div v-else>
      <nuxt />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/cards/ProductCard.vue";
import { Stack, StackItem } from "vue-stack-grid";
import { mapActions, mapGetters } from "vuex";

const mobileMediaQuery = window.matchMedia("screen and (max-width: 600px)");

export default {
  components: {
    ProductCard,
    Stack,
    StackItem,
  },
  data: () => ({
    image: require("../static/images/bandbts.png"),
    selectedBand: "",
    isMobile: mobileMediaQuery.matches,
  }),
  computed: {
    ...mapGetters("cart", ["getProductsByBand", "getProductsWithBand"]),
    ...mapGetters("bands", ["getBands"]),
    ...mapGetters("bandImage", ["getBandImages", "getBandImage"]),
    getParams() {
      if (this.$route.params === undefined) {
        return false;
      } else {
        return this.$route.params.id;
      }
    },
    getCardWidth() {
      return this.isMobile ? 144 : 228;
    },
  },
  mounted() {
    if (this.$route.params.id === undefined) {
      this.fetchProductsWithBand();
    }
    if (!this.getProductsByBand.length && this.$route.params === undefined) {
      this.fetchProductsByBand();
    }
    if (!this.getBands.length) {
      this.fetchBands();
    }
    if (!this.getBandImages.length) {
      this.fetchBandImages();
    }
  },
  methods: {
    ...mapActions("cart", ["fetchProductsByBand", "fetchProductsWithBand"]),
    ...mapActions("bands", ["fetchBands"]),
    ...mapActions("bandImage", ["fetchBandImages"]),
    selectBand(band) {
      this.selectedBand = band;
    },
    resetBand() {
      this.selectedBand = "";
    },
    getUrl(route) {
      return this.$route.params.id === route;
    },
    getIndex() {
      return this.$route.params.id === undefined;
    },
  },
};
</script>

<style scoped>
.mask {
  mask-image: url("../static/images/backgrounds/Union.svg");
  mask-position: bottom;
  mask-repeat: no-repeat;
  mask-size: 100%;
}
.nuxt-exact-link {
  background-color: #ffc5fe;
}
</style>