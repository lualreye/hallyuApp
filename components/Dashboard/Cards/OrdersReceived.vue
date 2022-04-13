<template>
  <div
    class="w-full h-24 border border-bg-200 shadow-md bg-aquamarine rounded-lg p-3"
  >
    <p class="text-hBlack font-semibold font-open mb-3">$ {{ ordersReceived }}</p>
    <div class="w-full flex justify-between items-center">
      <div>
        <p class="text-hBlack text-sm font-open">Pedidos</p>
        <p class="text-hBlack text-xs font-light font-open">entregados</p>
      </div>
      <div class="w-5 h-5 flex justify-center items-center">
        <GlobalHIcon name="ordersReceived" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ordersReceived: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
