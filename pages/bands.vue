<template>
  <div>
    <div class="w-full">
      <figure class="w-full h-60 mx-auto">
        <img :src="image" class="mask h-60 object-cover w-full object-top">
      </figure>
      <nav class="w-full max-w-xl mx-auto px-2 my-4">
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
            v-for="(band, i) in getBands"
            :key="i"
            class="flex-shrink-0 text-textColor font-junegull mx-2"
          >
            <nuxt-link :to="`/bands/${band.name.replaceAll(' ', '')}`">
              {{ band.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack :column-min-width="228" :gutter-width="8" :gutter-height="24" monitor-images-loaded>
        <stack-item v-for="(product, index) in getProducts" :key="index" class="flex justify-center">
          <product-card :image="product.thumbnail" :price="product.price" :name="product.name" />
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/cards/ProductCard.vue";
import { Stack, StackItem } from 'vue-stack-grid'
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
    Stack,
    StackItem
  },
  data: () => ({
    image: require('../static/images/bandbts.png')
  }),
  computed: {
    ...mapGetters("cart", ['getProducts']),
    ...mapGetters("bands", ['getBands'])
  },
  mounted() {
    if(!this.getProducts.length) {
      this.fetchProducts()
    }
    if(!this.getBands.length) {
      this.fetchBands()
    }
  },
  methods: {
    ...mapActions('cart', ['fetchProducts']),
    ...mapActions('bands', ["fetchBands"])
  }
};
</script>

<style scoped>
.mask {
  mask-image: url('../static/images/backgrounds/Union.svg');
  mask-position: bottom;
}
</style>
