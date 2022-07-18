<template>
  <div class="my-4">
    <div
      class="
        flex
        justify-between
        items-center
        border-primary border
        w-full
        max-w-lg
        mx-auto
        rounded-full
      "
    >
      <div class="flex justify-center items-center px-2 flex-grow">
        <div class="w-6 h-6 flex justify-center items-center">
          <HIcon name="search" class="text-primary" />
        </div>
        <input
          type="text"
          v-model="searchString"
          class="focus:outline-none px-1 w-full flex-grow"
        />
      </div>
      <div class="flex justify-center items-center divide-x divide-gray-400">
        <button
          v-if="searchString.length"
          class="w-5 h-5 flex bg-gray-300 mr-3 rounded-full justify-center"
          @click="deleteString"
        >
          <HIcon name="close" class="text-white items-center" />
        </button>
        <button
          class="
            font-junegull
            py-1
            px-2
            text-white
            bg-primary
            rounded-full
            shadow-md
          "
          @click="search"
        >
          Buscar
        </button>
      </div>
    </div>
    <div
      v-if="getSearchedProducts.length"
      class="py-4 px-2 max-w-screen-xl mx-auto my-9"
    >
      <stack
        :column-min-width="228"
        :gutter-width="8"
        :gutter-height="24"
        monitor-images-loaded
      >
        <stack-item
          v-for="(product, index) in getSearchedProducts"
          :key="index"
          class="flex justify-center"
        >
          <product-card :product="product" />
        </stack-item>
      </stack>
    </div>
    <div v-else class="mx-auto w-full max-w-lg">
      <p class="text-textColor font-junegull text-xl">
        No Encontramos ese producto :( {{ searchString }}
      </p>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/cards/ProductCard.vue";
import { Stack, StackItem } from "vue-stack-grid";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
    Stack,
    StackItem,
  },
  data: () => ({
    searchString: "",
  }),
  computed: {
    ...mapGetters("cart", ["getProducts", "getSearchedProducts"]),
    ...mapGetters("categories", ["getCategories"]),
    getParams() {
      if (this.$route.params === undefined) {
        return false;
      } else {
        return this.$route.params.id;
      }
    },
  },
  mounted() {
    if (!this.getProducts.length) {
      this.fetchProducts();
    }
    if (!this.getCategories.length) {
      this.fetchCategories();
    }
  },
  methods: {
    ...mapActions("cart", ["fetchProducts", "fetchSearchedProducts"]),
    ...mapActions("categories", ["fetchCategories"]),
    selectCategory(category) {
      this.selectedCategory = category;
    },
    resetCategory() {
      this.selectedCategory = "";
    },
    search() {
      this.fetchSearchedProducts(this.searchString.trim());
    },
    deleteString() {
      this.searchString = "";
    },
  },
};
</script>
