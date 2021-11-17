<template>
  <div class="w-full max-w-screen-2xl mx-auto">
    <the-hero :image="heroImage" />
    <the-limited-products />
  </div>
</template>

<script>
import TheHero from '~/components/index/TheHero.vue'
import TheLimitedProducts from '~/components/index/TheLimitedProducts.vue'
export default {
  components: {
    TheHero,
    TheLimitedProducts
  },
  data: () => ({
    heroImage: require('~/static/images/idols/han.jpg')
  })
}
</script>
