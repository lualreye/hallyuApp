<template>
  <div v-if="Object.keys(getProduct).length" class="py-4 px-2 max-w-screen-xl mx-auto my-9">
    <div class="w-full flex flex-wrap justify-evenly">
      <div class="w-full md:w-2/5 flex flex-col-reverse md:flex-row justify-center items-center p-1">
        <div class="w-full md:w-1/5 flex flex-row md:flex-col justify-center items-center md:mr-3">
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
          <img :src="selectedImage" :alt="getProduct.name" class="h-96 w-full border-2 border-primary object-cover object-center rounded-md">
        </figure>
      </div>
      <div class="w-full md:w-2/5 px-2 flex flex-col justify-between items-start py-10">
        <div>
          <p class="text-textColor text-lg font-open text-left">
            {{ getProduct.name }}
          </p>
          <GlobalHeartRate :read="read" :rating="rate" class="flex-start" />
          <p class="text-textColor text-4xl font-junegull text-left mt-3">
            $ {{ getProduct.price }}
          </p>
        </div>
        <div v-if="getProduct.clothes.sizes.length" class="w-full flex flex-col">
          <p class="text-textColor text-base font-open text-left">
            Tallas
          </p>
          <p v-for="(size, index) in getProduct.clothes.sizes" :key="index" class="text-textColor text-base font-open text-left">
            {{ size }}
          </p>
        </div>
        <div v-if="getProduct.clothes.colors.length" class="w-full flex flex-col">
          <p class="text-textColor text-base font-open text-left">
            Color
          </p>
          <p v-for="(item, index) in getProduct.clothes.colors" :key="index" class="text-textColor text-base font-open text-left">
            {{ item.name }}
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
    ...mapGetters('cart', ['getProduct']),
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
    this.getProduct.clothes
  },
  methods: {
    ...mapActions('cart', ['fetchProduct']),
    getImage(image) {
      this.selectedImage = image
    }
  }
}
</script>