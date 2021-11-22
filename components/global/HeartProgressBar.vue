<template>
  <div class="w-32 flex justify-center items-center relative">
    <div class="w-full bg-background flex justify-around progress-bar z-10">
      <the-heart />
      <the-heart />
      <the-heart />
      <the-heart />
      <the-heart />
    </div>
    <div class="w-full absolute bg-red z-0"></div>
  </div>
</template>

<script>
import TheHeart from '~/components/global/TheHeart.vue'
export default {
  components: {
    TheHeart
  }
}
</script>\


<style scoped>
.progress-bar:before {
  background: transparent;
}
</style>