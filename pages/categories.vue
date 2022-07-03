<template>
  <div>
    <div class="w-full">
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
          <li class="flex-shrink-0 text-textColor font-junegull mr-6" @click="resetCategory">
            <nuxt-link to="/categories">
              Todas
            </nuxt-link>
          </li>
          <li
            v-for="(category, i) in getCategories"
            :key="i"
            class="flex-shrink-0 text-textColor font-junegull mr-6"
            @click="selectCategory(category.name)"
          >
            <nuxt-link :to="`/categories/${category.name}`">
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="!getParams" class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack :column-min-width="228" :gutter-width="8" :gutter-height="24" monitor-images-loaded>
        <stack-item v-for="(product, index) in getProducts" :key="index" class="flex justify-center">
          <product-card :image="product.thumbnail" :price="product.price" :name="product.name" />
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
    selectedCategory: ''
  }),
  computed: {
    ...mapGetters("cart", ['getProducts']),
    ...mapGetters("categories", ["getCategories"]),
    filteredByCategory() {
      return this.getProducts.filter( pr => pr.category === this.selectedCategory)
    },
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
