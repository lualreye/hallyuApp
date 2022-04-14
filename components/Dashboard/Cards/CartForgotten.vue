<template>
  <div
    class="w-11/12 lg:w-full h-48 flex flex-col justify-between items-center py-6 px-3 bg-aquamarine rounded-lg shadow-md"
  >
    <div class="w-full">
      <p class="text-hBlack text-sm font-open">Carritos abandonados</p>
      <p class="text-hBlack font-light text-xs font-open">Mensuales</p>
    </div>
    <div class="w-full">
      <p class="text-lg text-hBlack font-open font-medium mb-1">
        {{ forgottenCarts }}
      </p>
      <div class="w-6 h-6 flex justify-center items-center">
        <GlobalHIcon name="forgottenCart" class="text-hBlack font-medium" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forgottenCarts: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
