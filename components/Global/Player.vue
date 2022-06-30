<template>
  <div class="fixed top-1/2 z-20 right-0 w-9 p-1 rounded-full flex flex-col justify-center items-center bg-lightPink">
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon name="search" class="text-primary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center my-3">
      <HIcon name="notification" class="text-secondary" />
      </button>
    <button class="w-7 h-7 flex justify-center items-center" @click="getMusic">
      <HIcon :name="isPlayer" class="text-primary"  />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HIcon from './HIcon.vue';

export default {
  components: {
    HIcon
  },
  computed: {
    ...mapGetters('music', ['getIndexPlaylist', 'isReady']),
    isPlayer() {
      return this.isReady ? 'volumeOn' : 'volumeOff';
    }
  },
  methods: {
    ...mapActions('music', ['fetchSongs', 'activePlayer']),
    getMusic() {
      if(!this.getIndexPlaylist.length) {
        this.fetchSongs()
      }
      if(this.isReady) {
        this.activePlayer(false)
      }
      this.activePlayer(true)
    },
  }
}
</script>