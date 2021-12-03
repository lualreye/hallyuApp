<template>
  <nuxt-link :to="link" class="w-64 p-2">
    <div class="relative">
      <span class="bg-secondary rounded-xl w-16 py-2 absolute top-0 left-0 shadow-lg">
        <p class="text-textColor font-junegull text-center">$ {{ price }}</p>
      </span>
      <div class="z-0 bg-primary rotated rounded-lg w-48 h-48 absolute top-0 left-0" />
      <figure class="w-56 flex justify-center item-center shadow-md rounded-lg z-10">
        <img :src="image" :alt="productName" class="w-full rounded-lg">
      </figure>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  data: () => ({
    link: "hola",
    price: 36,
    image: require("~/static/images/idols/han.jpg"),
    productName: 'Este es un nombre de producto'
  })
}
</script>

<style scoped>
.rotated {
  transform: rotate(45deg);
}
</style>