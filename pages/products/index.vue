<template>
  <div class="my-4">
    <div class="px-2">
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
        <div class="flex justify-center items-center px-2 flex-grow py-2">
          <div class="w-6 h-6 flex justify-center items-center">
            <HIcon name="search" class="text-primary" />
          </div>
          <input
            type="text"
            v-model="searchString"
            class="focus:outline-none px-1 w-full flex-grow bg-transparent"
          />
        </div>
        <div class="flex justify-center items-center divide-x divide-gray-400">
          <button
            v-if="searchString.length"
            class="w-5 h-5 flex bg-gray-400 mr-3 rounded-full justify-center"
            @click="deleteString"
          >
            <HIcon name="close" class="text-white items-center" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center mt-10">
      <button
        v-for="filter in filters"
        :key="filter"
        class="py-1 px-2 text-textColor font-junegull rounded-md shadow-md m-1"
        :class="{
          'bg-secondary': isThisFilter(filter),
          'bg-primary': !isThisFilter(filter),
        }"
        @click="selectFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>
    <div
      v-if="searchString.length"
      class="py-4 px-2 max-w-screen-xl mx-auto my-9"
    >
      <template v-if="getSearch !== false">
        <stack
          :column-min-width="144"
          :gutter-width="8"
          :gutter-height="24"
          monitor-images-loaded
        >
          <stack-item
            v-for="(product, index) in getSearch"
            :key="index"
            class="flex justify-center"
          >
            <product-card :product="product" />
          </stack-item>
        </stack>
      </template>
      <template v-else>
        <div class="mx-auto w-full max-w-lg mt-10">
          <p class="text-textColor font-junegull text-xl">
            No Encontramos ese producto :( {{ searchString }}
          </p>
        </div>
      </template>
    </div>

    <div
      v-else-if="filterSelected.length"
      class="py-4 px-2 max-w-screen-xl mx-auto my-9"
    >
      <stack
        :column-min-width="228"
        :gutter-width="8"
        :gutter-height="24"
        monitor-images-loaded
      >
        <stack-item
          v-for="(product, index) in getSearch"
          :key="index"
          class="flex justify-center"
        >
          <product-card :product="product" />
        </stack-item>
      </stack>
    </div>

    <div v-else class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack
        :column-min-width="228"
        :gutter-width="8"
        :gutter-height="24"
        monitor-images-loaded
      >
        <stack-item
          v-for="(product, index) in getProducts"
          :key="index"
          class="flex justify-center"
        >
          <product-card :product="product" />
        </stack-item>
      </stack>
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
    filters: ["menor a $20", "Ofertas", "Todos"],
    filterSelected: "",
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
    getSearch() {
      return this.filterByName().length ? this.filterByName() : false;
    },
  },
  mounted() {
    if (!this.getProducts.length) {
      this.fetchProducts();
    }
  },
  watch: {
    searchString(value) {
      if (value > 0) {
        this.filterSelected = "";
      }
    },
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
      this.filterByName();
    },
    deleteString() {
      this.searchString = "";
    },
    selectFilter(filter) {
      this.deleteString();
      this.filterSelected = filter;
      this.filterByName();
    },
    isThisFilter(filter) {
      return this.filterSelected === filter;
    },
    filterByName() {
      let results;
      if (this.filterSelected === "menor a $20") {
        results = this.getProducts.filter((product) => {
          return product.price < 20;
        });
      }
      if (this.filterSelected === "Ofertas") {
        results = this.getProducts.filter((product) => {
          return product.offered !== false;
        });
      }
      if (this.searchString.length) {
        results = this.getProducts.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(this.searchString.toLowerCase());
        });
      }
      if (this.filterSelected === "Todos") {
        results = [];
        this.filterSelected = "";
      }
      return results;
    },
  },
};
</script>
