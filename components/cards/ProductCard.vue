<template>
  <nuxt-link :to="`/products/${product.id}`" class="w-56">
    <div class="relative w-full h-full">
      <img
        :src="product.thumbnail"
        alt="productName"
        class="border-2 border-primary object-cover object-center rounded-3xl w-full h-96"
      />
      <div
        class="
          absolute
          top-0
          bottom-0
          right-0
          py-2
          w-full
          h-96
          flex flex-col
          justify-between
        "
      >
        <div class="w-full flex justify-end items-center  px-4">
          <button
            class="
              w-8
              h-8
              p-1
              shadow-xl
              rounded-full
              bg-gray-100
              flex
              justify-center
              items-center
            "
            @click="like"
          >
            <GlobalHIcon
              name="like"
              :class="{
                'text-gray-300': !isLiked,
                'text-secondary': isLiked,
              }"
            />
          </button>
        </div>
        <div class="w-full flex justify-between items-center px-4">
          <p class="text-primary text-2xl font-junegull bg-gray-200 rounded-full py-1 px-2">
            $ {{ product.price }}
          </p>
          <button class="w-8 h-8 p-1 flex justify-center items-center shadow-xl bg-primary rounded-full" @click="addToCart">
            <GlobalHIcon name='cart' class="text-gray-100" />
          </button>
        </div>
      </div>
    
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isLiked: false
  }),
  methods: {
    like() {
      if(this.isLiked) {
        this.isliked = false;
      } else {
        this.isLiked = true
      }
    },
    addToCart() {
      console.log('Estamos yendo al carrito')
    }
  }
};
</script>

<style scoped>
.productImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
