<template>
  <div
    class="w-full flex flex-col justify-between items-center rounded-lg shadow-md bg-background border border-aquamarine p-6"
  >
    <p class="text-lg font-open text-hBlack w-full mb-3">
      Top 10 menos vendidos
    </p>
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
    ],
  }),
};
</script>
