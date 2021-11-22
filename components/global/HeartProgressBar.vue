<template>
  <div class="w-32 flex justify-center items-center relative">
    <div class="flex justify-center items-center">
      <div v-for="n in 5" :key="n" class="w-5 h-5 flex justify-center items-center">
        <h-icon name="like" class="text-pink-700" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeart from "~/components/global/TheHeart.vue";
export default {
  components: {
    TheHeart,
  },
};
</script>

