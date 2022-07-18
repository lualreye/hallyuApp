<template>
  <div
    v-if="isReady"
    class="
      fixed
      centered
      bottom-6
      z-20
      h-9
      p-1
      rounded-full
      flex
      justify-center
      items-center
      bg-gray-800
    "
  >
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon name="previous" class="text-primary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center mx-3" @click="play">
      <HIcon :name="isPlayer" class="text-secondary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center">
      <HIcon name="next" class="text-primary" />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HIcon from "./HIcon.vue";

export default {
  components: {
    HIcon,
  },
  data: () => ({
    selectedSong: {},
  }),
  computed: {
    ...mapGetters("music", ["getIndexPlaylist", "isPlaying", "isReady"]),
    isPlayer() {
      return Object.keys(this.selectedSong).length ? "play" : "pause";
    },
  },
  methods: {
    ...mapActions("music", ["fetchSongs", "activePlayer", "playSong"]),
    play() {
      this.playSong();
    },
    nextSong() {
      // const index = this.getIndexPlaylist.findIndex(
      //   (song) => song.id === this.selectedSong.id
      // );
      // this.selectedSong = this.getIndexPlaylist[index + 1];
    },
    previousSong() {
      // const index = this.getIndexPlaylist.findIndex(
      //   (song) => song.id === this.selectedSong.id
      // );
      // this.selectedSong = this.getIndexPlaylist[index - 1];
    },
  },
};
</script>


<style>
.centered {
  right: calc(50% - 36px);
}
</style>