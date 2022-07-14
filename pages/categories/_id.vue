<template>
  <div>
    <div v-if="getProductsByCategory.length" class="py-4 px-2 max-w-screen-xl mx-auto my-9">
      <stack :column-min-width="228" :gutter-width="8" :gutter-height="24" monitor-images-loaded>
        <stack-item v-for="(product, index) in getProductsByCategory" :key="index" class="flex justify-center">
          <product-card :product="product" />
        </stack-item>
      </stack>
    </div>
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
    ...mapGetters('cart', ['getProductsByCategory']),
    getParams() {
      return this.$route.params.id
    }
  },
  watch: {
    getParams(newVal, oldVal) {
      if(newVal !== oldVal) {
        this.clearProductsByCategory()
        this.fetchProductsByCategory(this.$route.params.id)
      }
    }
  },
  mounted() {
    this.clearProductsByCategory()
    this.fetchProductsByCategory(this.$route.params.id)
  },
  methods: {
    ...mapActions('cart', ['fetchProductsByCategory', 'clearProductsByCategory'])
  }
}
</script>