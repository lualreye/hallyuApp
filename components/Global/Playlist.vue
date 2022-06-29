<template>
  <div v-if="getIndexPlaylist.length" class="fixed bottom-6 z-20 right-0 h-9 p-1 rounded-full flex justify-center items-center bg-gray-800">
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon name="previous" class="text-primary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center mx-3">
      <HIcon name="pause" class="text-secondary" />
      </button>
    <button class="w-7 h-7 flex justify-center items-center" @click="getMusic">
      <HIcon name="next" class="text-primary"  />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('music', ['getIndexPlaylist']),
    isPlayer() {
      return !this.getIndexPlaylist.length ? 'play' : 'pause';
    }
  },
  methods: {
    ...mapActions('music', ['fetchSongs']),
    getMusic() {
      if(!this.getIndexPlaylist.length) {
        this.fetchSongs()
      }
    }
  }
}
</script>