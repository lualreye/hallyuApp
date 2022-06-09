<template>
  <div class="w-64 flex flex-col items-center">
    <div class="relative flex justify-center items-center">
      <span
        class="
          bg-lightPink
          rounded-xl
          w-16
          py-2
          absolute
          -top-4
          -left-4
          shadow-lg
          z-20
        "
      >
        <p class="text-textColor font-junegull text-center">$ {{ price }}</p>
      </span>
      <div
        class="
          z-0
          bg-aquamarine
          rotated
          rounded-lg
          w-48
          h-48
          absolute
          top-0
          left-0
          bottom-0
          right-0
          mx-auto
          my-auto
        "
      />
      <figure
        class="w-56 flex justify-center item-center shadow-md rounded-lg z-10"
      >
        <img :src="image" :alt="productName" class="w-full rounded-lg" />
      </figure>
    </div>
    <button
      @click="getToTheCart(id)"
      class="w-4/5 py-2 rounded-full mt-6 bg-primary text-white font-open shadow-md">
      Agregar al carrito
    </button>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.rotated {
  transform: rotate(45deg);
}
</style>
