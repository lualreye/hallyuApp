<template>
  <div
    class="w-full h-80 flex flex-col justify-between items-center rounded-lg shadow-md bg-background p-6"
  >
    <p class="text-lg font-open text-hBlack w-full">Top 10 más vendidos</p>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="w-full flex justify-center items-center">
        <DashboardCardsVotedProduct
          v-for="(product, index) in products"
          :key="index"
          :productImage="product.image"
          :productName="product.name"
          :salesTotal="salesTotal"
          :salesnumber="product.salesNumber"
          :color="product.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    },
    salesTotal: {
      type: Number,
      required: true,
      default: 500
    }
  },
  colors: [
      "#F5DF72",
      "#F5C960",
      "#F5BB54",
      "#F5AE48",
      "#F59F3C",
      "#F59130",
      "#F58325",
      "#F57519",
      "#F5680D",
      "#F55901",
    ]
};
</script>
