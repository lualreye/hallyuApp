<template>
  <div>
    <div v-if="!getParams" class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack :column-min-width="228" :gutter-width="8" :gutter-height="24" monitor-images-loaded>
        <stack-item v-for="(product, index) in getProducts" :key="index" class="flex justify-center">
          <product-card :product="product" />
        </stack-item>
      </stack>
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
    selectedCategory: ''
  }),
  computed: {
    ...mapGetters("cart", ['getProducts']),
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
    if(!this.getProducts.length) {
      this.fetchProducts()
    }
    if(!this.getCategories.length) {
      this.fetchCategories()
    }
  },
  methods: {
    ...mapActions('cart', ['fetchProducts']),
    ...mapActions('categories', ["fetchCategories"]),
    selectCategory(category) {
      this.selectedCategory = category
    },
    resetCategory() {
      this.selectedCategory = ""
    }
  }
};
</script>
