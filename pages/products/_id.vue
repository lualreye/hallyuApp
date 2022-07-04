<template>
  <div class="py-4 px-2 max-w-screen-xl mx-auto my-9">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col-reverse md:flex-row justify-center items-center p-1">
        <div class="w-full md:w-1/5 flex flex-row md:flex-col justify-center items-center">
          <figure v-for="(image, index) in getProduct.images" :key="index" class="w-16 h-16 m-2 flex justify-center items-center border-2 border-primary rounded-lg">
            <img :src="image" alt="" class="object-cover object-center w-20 rounded-md">
          </figure>
        </div>
        <figure class="w-full md:w-4/5 border-2 border-primary rounded-md flex justify-center items-center">
          <img :src="getProduct.thumbnail" alt="" class="w-full object-cover object-center rounded-md">
        </figure>
      </div>
      <div class="w-full md:w-1/2 p-2">
        <p class="text-textColor text-base font-open text-left">
          {{ getProduct.name }}
        </p>
        <p class="text-textColor text-2xl font-junegull text-left">
          {{ getProduct.price }}
        </p>
        <div v-if="getProduct.clothes.sizes.length" class="w-full flex flex-col">
          <p class="text-textColor text-base font-open text-left">
            Tallas
          </p>
          <p v-for="(size, index) in getProduct.clothes.sizes" :key="index" class="text-textColor text-base font-open text-left">
            {{ size }}
          </p>
        </div>
        <div class="w-full flex flex-col">
          <p class="text-textColor text-base font-open text-left">
            Color
          </p>
          <p v-for="(item, index) in getProduct.clothes.colors" :key="index" class="text-textColor text-base font-open text-left">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', ['getProduct']),
    getParams() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.fetchProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions('cart', ['fetchProduct'])
  }
}
</script>