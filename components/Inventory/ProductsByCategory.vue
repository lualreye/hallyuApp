<template>
  <div class="w-56 flex flex-col justify-start items-center">
    <div class="w-full flex justify-between items-center mb-4">
      <p class="text-hBlack text-sm">
        {{ category.toUpperCase() }}
      </p>
      <p class="text-hBlack text-sm">{{ products.length }} items</p>
    </div>
    <div class="w-full flex flex-col justify-center items-center px-2">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="w-full flex justify-center items-center mb-2"
      >
        <InventoryCardsProductItem
          :image="require('@/static/images/idols/han.jpg')"
          name="Soy un loco y lo que escribo es algo increible"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>