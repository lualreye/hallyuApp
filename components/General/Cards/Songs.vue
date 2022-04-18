<template>
  <div
    class="w-full flex justify-between items-center hover:bg-primary rounded-lg p-2"
  >
    <div class="w-full flex justify-start items-center">
      <button
        class="w-8 h-8 mr-3 bg-aquamarine flex justify-center items-center rounded-lg"
        @click="playMusic"
      >
        <GlobalHIcon name="play" class="text-textColor" />
      </button>
      <p class="text-textColor font-open">
        {{ songName }}
      </p>
    </div>
    <button class="w-6 h-6 flex justify-center items-center" @click="deleteSng">
      <GlobalHIcon name="delete" class="text-textColor hover:text-pink-600" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    isPlaying: false,
    music: null
  }),
  props: {
    songName: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
    songImage: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
    id: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
  },
  mounted() {
    const musicOn = new Audio(this.songImage)
    this.music = musicOn
  },
  methods: {
    ...mapActions("general", ["deleteSong"]),
    playMusic() {
      if (this.isPlaying) {
        this.music.pause();
        this.isPlaying = false
      } else {
        this.music.play();
        this.isPlaying = true
      }
    },
    deleteSng() {
      this.deleteSong(this.id);
    },
  },
};
</script>
