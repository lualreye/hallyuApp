<template>
  <div
    class="w-32 relative flex justify-center items-center rounded-lg py-2 border border-primary bg-background"
  >
    <input
      type="file"
      accept=".csv"
      class="w-full absolute left-0 top-0 bottom-0 z-10 opacity-0"
    />
    <div class="w-6 h-6 flex justify-center items-center mr-1">
      <GlobalHIcon name="excel" class="text-textColor" />
    </div>
    <p class="text text-textColor font-light font-open">Inventario</p>
  </div>
</template>

<script>
export default {
  methods: {
    uploadInventory() {
      console.log("Estamos subiendo el excel");
    },
  },
};
</script>
