<template>
  <div
    class="w-11/12 lg:w-full h-48 flex flex-col justify-between items-center py-6 px-3 bg-lightPink rounded-lg shadow-md"
  >
    <div class="w-full">
      <p class="text-hBlack font-open text-sm">Visitas en la web</p>
      <p class="text-hBlack font-light text-xs font-open">Diarias</p>
    </div>
    <div class="w-full">
      <p class="text-lg text-hBlack font-open font-medium mb-1">
        {{ visits }}
      </p>
      <div class="w-6 h-6 flex justify-center items-center">
        <GlobalHIcon name="eye" class="text-hBlack font-medium" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visits: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>
