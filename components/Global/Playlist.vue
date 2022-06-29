<template>
  <div v-if="isReady" class="fixed centered bottom-6 z-20 h-9 p-1 rounded-full flex justify-center items-center bg-gray-800">
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon name="previous" class="text-primary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center mx-3">
      <HIcon :name="isPlayer" class="text-secondary" />
      </button>
    <button class="w-7 h-7 flex justify-center items-center" @click="getSong">
      <HIcon name="next" class="text-primary"  />
    </button>
    <audio :src="selectedSong.image" onended="nextSong" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    selectedSong: {}
  }),
  computed: {
    ...mapGetters('music', ['getIndexPlaylist', 'isReady']),
    isPlayer() {
      return Object.keys(this.selectedSong).length ? 'play' : 'pause';
    }
  },
  methods: {
    ...mapActions('music', ['fetchSongs', 'activePlayer']),
    getSong() {
      if(!Object.keys.length) {
        this.selectedSong=this.getIndexPlaylist[0]
        this.activePlayer(true)
      }
      else {
        this.selectedSong={}
        this.activePlayer(false)
      }
    },
    nextSong() {
      const index = this.getIndexPlaylist.findIndex((song) => song.id === this.selectedSong.id)
      this.selectedSong = this.getIndexPlaylist[index + 1]
    },
    previousSong() {
      const index = this.getIndexPlaylist.findIndex((song) => song.id === this.selectedSong.id)
      this.selectedSong = this.getIndexPlaylist[index - 1]
    }
  }
}
</script>


<style>
.centered {
  right: calc(50% - 36px);
}
</style>