<template>
  <nuxt-link :to="link" class="w-64">
    <div class="relative flex justify-center items-center">
      <span
        class="
          bg-secondary
          rounded-xl
          w-16
          py-2
          absolute
          top-0
          left-0
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
  </nuxt-link>
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
