<template>
  <div>
    <InventoryCardsNewProduct />
    <div class="w-full my-6 flex justify-start items-center">
      <div class="w-auto mr-3">
        <InventorySearch />
      </div>
      <div class="w-auto mr-3">
        <InventoryUploadInventory />
      </div>
      <div class="w-auto mr-3">
        <InventoryUploadButton />
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  layout: "app",
};
</script>
