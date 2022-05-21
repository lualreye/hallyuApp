<template>
  <div class="w-full max-w-5xl">
    <div class="w-full flex justify-start items-center">
      <div class="w-auto flex justify-center items-center mr-3">
        <InventoryProductsByCategory
          category="snack"
          :products="getCategories"
        />
      </div>
      <div class="w-auto flex justify-center items-center mr-3">
        <InventoryProductsByCategory
          category="snack"
          :products="getCategories"
        />
      </div>
      <div class="w-auto flex justify-center items-center mr-3">
        <InventoryProductsByCategory
          category="snack"
          :products="getCategories"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    products: [],
  }),
  computed: {
    ...mapGetters("categories", ["getCategories"]),
  },
};
</script>