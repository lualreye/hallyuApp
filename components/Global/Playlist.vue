<template>
  <div
    v-if="isReady"
    class="
      fixed
      centered
      bottom-6
      z-20
      p-3
      rounded-full
      flex flex-col
      justify-center
      items-center
      bg-gray-800
    "
  >
    <div class="flex">
      <button
        class="w-7 h-7 flex justify-center items-center"
        @click="previous"
      >
        <HIcon name="previous" class="text-primary" />
      </button>
      <button
        class="w-7 h-7 flex justify-center items-center mx-3"
        @click="play"
      >
        <HIcon :name="isPlayer" class="text-secondary" />
      </button>
      <button class="w-7 h-7 flex justify-center items-center" @click="next">
        <HIcon name="next" class="text-primary" />
      </button>
    </div>
    <p
      v-if="Object.keys(getSong).length"
      class="
        text-gray-800 text-sm text-center
        fixed
        bottom-0
        flex
        justify-center
        w-auto
        left-0
        right-0
        p-1
        rounded-full
      "
    >
      {{ getSong.name }}
    </p>
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
  right: calc(50% - 54px);
}
</style>