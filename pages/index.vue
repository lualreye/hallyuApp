<template>
  <div class="w-full max-w-screen-2xl mx-auto">
    <the-hero :image="heroImage" />
  </div>
</template>

<script>
import TheHero from '~/components/index/TheHero.vue'
export default {
  components: {
    TheHero
  },
  data: () => ({
    heroImage: require('~/static/images/idols/han.jpg')
  })
}
</script>
