<template>
  <div class="py-4 px-2 max-w-screen-xl mx-auto my-9">
    <stack :column-min-width="228" :gutter-width="8" :gutter-height="24" monitor-images-loaded>
      <stack-item v-for="(product, index) in getProductsByBand" :key="index" class="flex justify-center">
        <product-card :product="product" />
      </stack-item>
    </stack>
  </div>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid'
import { mapActions, mapGetters } from 'vuex'
import ProductCard from '../../components/cards/ProductCard.vue'

export default {
  components: {
    Stack,
    StackItem,
    ProductCard
  }, 
  computed: {
    ...mapGetters('cart', ['getProductsByBand']),
    getParams() {
      return this.$route.params.id
    }
  },
  watch: {
    getParams(newVal, oldVal) {
      if(newVal !== oldVal) {
        this.clearProductsByBand()
        this.fetchProductsByBand(this.$route.params.id)
      }
    }
  },
  mounted() {
    this.clearProductsByBand()
    this.fetchProductsByBand(this.$route.params.id)
  },
  methods: {
    ...mapActions('cart', ['fetchProductsByBand', 'clearProductsByBand'])
  }
}
</script>