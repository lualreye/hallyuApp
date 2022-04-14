<template>
  <div
    class="w-full flex flex-col justify-between items-center rounded-lg shadow-md bg-background border border-aquamarine p-6"
  >
    <p class="text-lg font-open text-hBlack w-full mb-3">Top 10 más vendidos</p>
    <div class="w-full flex flex-col justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center">
        <DashboardCardsVotedProduct
          v-for="(product, index) in products"
          :key="index"
          :productImage="product.image"
          :productName="product.name"
          :salesTotal="salesTotal"
          :salesNumber="product.salesNumber"
          :color="colors[index]"
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
      required: true,
    },
    salesTotal: {
      type: Number,
      required: true,
      default: 500,
    },
  },
  data: () => ({
    colors: [
      "#89F095",
      "#89E3A3",
      "#89DBAD",
      "#89D2B7",
      "#89CAC0",
      "#89C2CA",
      "#89F094",
      "#89F094",
      "#89F094",
      "#89F094",
    ],
  }),
};
</script>
