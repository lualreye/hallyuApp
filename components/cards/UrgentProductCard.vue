<template>
  <div class="w-48 h-48 relative">
    <figure class="w-full h-full rounded-lg flex justify-center items-center">
      <img :src="image" alt="productName" class="rounded-lg" >
    </figure>
    <div class="rotation absolute right-3/4 bottom-2/3 flex flex-col justify-center items-center">
      <div class="px-2 bg-aquamarine flex-justify-center items-center rounded-lg">
        <p class="text-textColor bg-aquamarine px-2">Quedan</p>
      </div>
      <div class="w-14 h-14 flex justify-center items-center bg-background rounded-full shadow-2xl">
        <p class="text-textColor text-lg">
          {{ stock }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    timesLeft: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.rotation {
  transform: rotate(345deg);
}
</style>
