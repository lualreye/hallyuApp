<template>
  <div v-if="Object.keys(getProduct).length" class="py-4 px-2 w-full max-w-screen-xl mx-auto my-9">
    <div class="w-full flex flex-wrap justify-evenly">
      <div class="w-full md:w-2/5 flex flex-col-reverse md:flex-row justify-evenly items-center">
        <div class="w-full md:w-1/5 flex flex-row md:flex-col justify-center items-center mr-3">
          <figure
            class="w-16 h-16 m-2 flex justify-center items-center rounded-lg"
            @click="getImage(getProduct.thumbnail)">
            <img :src="getProduct.thumbnail" :alt="getProduct.name" class="object-cover border-2 border-primary object-center w-full h-16 rounded-md">
          </figure>
          <figure
            v-for="image in getProduct.images"
            class="w-16 h-16 m-2 flex justify-center items-center rounded-lg"
            @click="getImage(image)">
            <img :src="image" :alt="getProduct.name" class="object-cover border-2 border-primary object-center w-full h-16 rounded-md">
          </figure>
        </div>
        <figure class="w-full min-w-full md:w-3/5 h-96 rounded-md flex justify-center items-center">
          <img :src="selectedImage" :alt="getProduct.name" class="h-96 w-full min-w-full border-2 border-primary object-cover object-center rounded-md">
        </figure>
      </div>
      <div class="w-full md:w-2/5 px-2 flex flex-col justify-between items-start py-2">
        <div>
          <p class="text-textColor text-lg font-open text-left">
            {{ getProduct.name }}
          </p>
          <GlobalHeartRate :read="read" :rating="rate" class="flex-start" />
          <p class="text-textColor text-4xl font-junegull text-left mt-3">
            $ {{ getProduct.price }}
          </p>
        </div>
        <div class="w-full flex flex-col">
          <p class="text-textColor text-base font-light font-open text-left">
            Tallas
          </p>
          <div v-if="getProduct.clothes.sizes.length">
            <p v-for="(size, index) in getProduct.clothes.sizes" :key="index" class="text-textColor text-base font-open text-left">
              {{ size }}
            </p>
          </div>
          <p v-else class="text-textColor text-base font-open text-left">
            No aplica
          </p>
        </div>
        <div class="w-full flex flex-col">
          <p class="text-textColor text-base font-light font-open text-left">
            Color
          </p>
          <div v-if="getProduct.clothes.colors.length">
            <p v-for="(item, index) in getProduct.clothes.colors" :key="index" class="text-textColor text-base font-open text-left">
              {{ item.name }}
            </p>
          </div>
          <p v-else class="text-textColor text-base font-open text-left">
            No aplica
          </p>
        </div>
        <div class="w-full lg:w-5/6 flex flex-col justify-center items-start">
          <button class="mb-3 w-full p-2 rounded-full bg-secondary text-white">
            Agregar al carrito
          </button>
          <button class="w-full p-2 rounded-full bg-white text-secondary border border-secondary">
            Agregar a favoritos
          </button>
        </div>
        <p v-if="getProduct.description.length" class="text-base font-open text-textColor">
          {{ getProduct.description }}
        </p>
      </div>
    </div>
    <div v-if="getSuggestedProducts" class="flex w-full overflow-x-auto justify-start items-center my-10 sm:pl-6 pl-1 py-5">
      <nuxt-link v-for="(product, index) in getSuggestedProducts" :key="index" :to="`/products/${product.id}`" class="flex-none w-56 h-56 p-1 relative mr-5">
        <img :src="product.thumbnail" :alt="product.name" class="w-56 h-56 object-cover object-center rounded-xl border border-primary">
        <span class="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-gray-200 text-textColor font-junegull text-xl">{{ product.price }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    selectedImage: "",
    read: true,
    rate: 4
  }),
  computed: {
    ...mapGetters('cart', ['getProduct', 'getSuggestedProducts']),
    getParams() {
      return this.$route.params.id
    },
  },
  watch: {
    getProduct(value) {
      const product = Object.keys(value).length
      if(product) {
        this.selectedImage = value.thumbnail
      }
    }
  },
  mounted() {
    this.fetchProduct(this.$route.params.id)
    this.fetchSuggestedProducts()
  },
  methods: {
    ...mapActions('cart', ['fetchProduct', 'fetchSuggestedProducts']),
    getImage(image) {
      this.selectedImage = image
    }
  }
}
</script>