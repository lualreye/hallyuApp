<template>
  <div>
    <div class="w-full">
      <figure class="w-full h-60 mx-auto">
        <img :src="image" class="mask h-60 object-cover w-full object-top">
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
          <li class="flex-shrink-0 text-textColor font-junegull mr-6" @click="resetBand">
            <nuxt-link to="/categories">
              Todas
            </nuxt-link>
          </li>
          <li
            v-for="(category, i) in getCategories"
            :key="i"
            class="flex-shrink-0 text-textColor font-junegull mr-6 relative"
            @click="selectBand(category.name)"
          >
            <nuxt-link :to="`/categories/${category.name}`" class="bg-lightPink px-1 rounded-full">
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="!getParams" class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack :column-min-width="228" :gutter-width="8" :gutter-height="24" monitor-images-loaded>
        <stack-item v-for="(product, index) in getProducts" :key="index" class="flex justify-center">
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
import { Stack, StackItem } from 'vue-stack-grid'
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
    Stack,
    StackItem
  },
  data: () => ({
    image: require('../static/images/bandbts.png'),
    selectedBand: ''
  }),
  computed: {
    ...mapGetters("cart", ['getProductsByCategory', 'getProducts']),
    ...mapGetters("categories", ["getCategories"]),
    getParams() {
      if(this.$route.params === undefined) {
        return false
      } else {
        return this.$route.params.id
      }
    }
  },
  mounted() {
    if(this.$route.params.id === undefined) {
      this.fetchProducts()
    }
    if(!this.getProductsByCategory.length && this.$route.params.id !== undefined) {
      this.fetchProductsByCategory(this.$route.params.id)
    }
    if(!this.getCategories.length) {
      this.fetchCategories()
    }
  },
  methods: {
    ...mapActions('cart', ['fetchProductsByCategory', 'fetchProducts']),
    ...mapActions('categories', ["fetchCategories"]),
    selectBand(band) {
      this.selectedBand = band
    },
    resetBand() {
      this.selectedBand = ""
    },
  }
};
</script>

<style scoped>
.mask {
  mask-image: url('../static/images/backgrounds/Union.svg');
  mask-position: bottom;
}
.nuxt-exact-link {
  background-color: #ffc5fe;
}
</style>