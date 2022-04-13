<template>
  <div
    class="w-full h-24 border border-bg-200 shadow-md bg-background rounded-lg p-3"
  >
    <p class="text-hBlack font-semibold font-open mb-3">$ {{ orders }}</p>
    <div class="w-full flex justify-between items-center">
      <div>
        <p class="text-hBlack text-sm font-open">Ingresos</p>
        <p class="text-hBlack text-xs font-light font-open">Semanal</p>
      </div>
      <div class="w-5 h-5 flex justify-center items-center">
        <GlobalHIcon name="orders" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
