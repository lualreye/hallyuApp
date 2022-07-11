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
        <p class="text-textColor font-junegull text-center">$ {{ product.price }}</p>
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
        <img :src="product.thumbnail" :alt="product.name" class="w-full rounded-lg" />
      </figure>
    </div>
    <nuxt-link
      :to="`/products/${product.id}`"
      class="w-4/5 py-2 rounded-full mt-6 bg-primary shadow-md">
      <p class="text-white font-open w-full text-center">Ver producto</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.rotated {
  transform: rotate(45deg);
}
</style>
