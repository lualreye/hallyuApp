<template>
  <div class="fixed top-1/2 z-20 right-0 w-9 p-1 rounded-full flex flex-col justify-center items-center bg-lightPink">
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon name="search" class="text-primary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center my-3">
      <HIcon name="notification" class="text-secondary" />
      </button>
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon :name="isPlayer" class="text-primary"  />
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('music', ['getIsPlaying']),
    isPlayer() {
      return !this.getIsPlaying.length ? 'play' : 'pause';
    }
  }
}
</script>