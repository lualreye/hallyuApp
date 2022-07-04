<template>
  <div class="py-4 px-2 max-w-screen-xl mx-auto my-9">
    <div class="w-full md:w-1/2 flex jusify-center items-center">
      <div class="w-full flex flex-row md:flex-col justify-center items-center">
        <figure v-for="(image, index) in getProduct.images" :key="index" class="w-20 h-16 flex justify-center items-center border-2 border-primary rounded-lg">
          <img :src="image" alt="">
        </figure>
        <figure class="w-full "></figure>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex jusify-center items-center">

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
  // watch: {
  //   getParams(newVal, oldVal) {
  //     if(newVal !== oldVal) {
  //       this.clearProductsByCategory()
  //       this.fetchProductsByCategory(this.$route.params.id)
  //     }
  //   }
  // },
  mounted() {
    this.fetchProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions('cart', ['fetchProduct'])
  }
}
</script>