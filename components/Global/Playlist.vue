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
    <button class="w-7 h-7 flex justify-center items-center" @click="previous">
      <HIcon name="previous" class="text-primary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center mx-3" @click="play">
      <HIcon :name="isPlayer" class="text-secondary" />
    </button>
    <button class="w-7 h-7 flex justify-center items-center" @click="next">
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
    isPlayer: "play",
  }),
  computed: {
    ...mapGetters("music", [
      "getIndexPlaylist",
      "isPlaying",
      "isReady",
      "getSong",
    ]),
  },
  methods: {
    ...mapActions("music", [
      "fetchSongs",
      "activePlayer",
      "playSong",
      "nextSong",
      "previousSong",
    ]),
    play() {
      this.playSong();
      this.songIsPlaying();
    },
    next() {
      if (!Object.keys(this.getSong).length) {
        this.play();
      } else {
        this.nextSong();
      }
    },
    previous() {
      if (!Object.keys(this.getSong).length) {
        this.play();
      } else {
        this.previousSong();
      }
    },
    songIsPlaying() {
      if (this.isPlayer === "play") {
        this.isPlayer = "pause";
      } else {
        this.isPlayer = "play";
      }
    },
  },
};
</script>


<style>
.centered {
  right: calc(50% - 36px);
}
</style>