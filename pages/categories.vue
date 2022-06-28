<template>
  <div>
    <div class="w-full">
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
            v-for="(category, i) in categories"
            :key="i"
            class="flex-shrink-0 text-textColor font-junegull mx-2"
          >
            {{ category.name }}
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
    categories: [
      { name: "moda" },
      { name: "k-pop" },
      { name: "snack" },
      { name: "accesorios" },
      { name: "peluches" },
    ],
  }),
  computed: {
    ...mapGetters("cart", ['getProducts'])
  },
  mounted() {
    if(!this.getProducts.length) {
      this.fetchProducts()
    }
  },
  methods: {
    ...mapActions('cart', ['fetchProducts'])
  }
};
</script>
