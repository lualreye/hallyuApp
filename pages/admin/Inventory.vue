<template>
  <div>
    <InventoryCardsNewProduct />
    <div class="w-full my-6 flex flex-wrap justify-start items-center">
      <div class="w-full md:w-auto mr-3">
        <InventorySearch />
      </div>
      <div class="w-full md:w-auto flex justify-center items-center flex-wrap">
        <div class="w-full md:w-auto mr-3 mt-1 md:mt-0">
          <InventoryUploadButton />
        </div>
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
