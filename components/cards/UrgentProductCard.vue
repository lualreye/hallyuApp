<template>
  <div class="w-44 h-44 rounded-lg relative">
    <div class="absolute z-10 bottom-3/4 left-0 rotation">
      <div class="rounded px-2 py-2 bg-aquamarine">
        <p class="text-base text-textColor">Quedan</p>
      </div>
      <div
        class="
          flex
          justify-center
          items-center
          w-12
          h-12
          bg-background
          rounded-full
          shadow-xl
        "
      >
        <p class="text-lg text-center font-medium font-open text-textColor">
          {{ stock }}
        </p>
      </div>
    </div>
    <div class="w-40 h-40 z-0">
      <figure class="w-full h-full justify-center items-center rounded-lg">
        <img :src="image" :alt="productName" class="rounded-lg" />
      </figure>
    </div>
    <div class="absolute bottom-0 right-0 w-4 py-2 bg-background rounded-lg">
      <p class="text-lg font-medium font-open text-secondary">
        {{ timesLeft }}
      </p>
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
  transform: rotate(330deg);
}
</style>
