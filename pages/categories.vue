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
    <div class="w-full py-4 px-2">
      <product-card />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/cards/ProductCard.vue";

export default {
  components: { ProductCard },
  data: () => ({
    categories: [
      { name: "moda" },
      { name: "k-pop" },
      { name: "snack" },
      { name: "accesorios" },
      { name: "peluches" },
    ],
  }),
};
</script>
