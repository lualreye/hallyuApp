<template>
  <div
    class="
      fixed
      top-1/2
      z-20
      right-0
      w-9
      px-2
      py-3
      rounded-full
      flex flex-col
      justify-center
      items-center
      bg-lightPink
    "
  >
    <button
      class="w-7 h-7 flex justify-center items-center relative player-button"
      @click="goToSearch"
    >
      <span
        class="
          bg-gray-400
          w-32
          rounded-full
          py-1
          px-2
          text-xs
          absolute
          right-full
          -top-3
          text-white
          player-toast
        "
        >Busca un producto</span
      >
      <HIcon name="search" class="text-primary" />
    </button>
    <button
      class="
        w-7
        h-7
        flex
        justify-centeritems-center
        my-6
        relative
        player-button
      "
      @click="showDiscount"
    >
      <span
        class="
          bg-gray-400
          w-32
          rounded-full
          py-1
          px-2
          text-xs
          absolute
          right-full
          -top-3
          text-white
          player-toast
        "
        >Notificaciones</span
      >
      <HIcon name="notification" class="text-secondary" />
    </button>
    <button
      class="w-7 h-7 flex justify-center items-center relative player-button"
      @click="getMusic"
    >
      <span
        class="
          bg-gray-400
          w-32
          rounded-full
          py-1
          px-2
          text-xs
          absolute
          right-full
          -top-3
          text-white
          player-toast
        "
        >Reproductor</span
      >
      <HIcon :name="isPlayer" class="text-primary" />
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
  computed: {
    ...mapGetters("music", ["getIndexPlaylist", "isReady"]),
    ...mapGetters("general", ["getDiscount"]),
    isPlayer() {
      return this.isReady ? "volumeOn" : "volumeOff";
    },
  },
  methods: {
    ...mapActions("music", ["fetchSongs", "activePlayer"]),
    ...mapActions("general", ["showTicket"]),
    getMusic() {
      if (!this.getIndexPlaylist.length) {
        this.fetchSongs();
      }
      if (this.isReady) {
        this.activePlayer(false);
      } else {
        this.activePlayer(true);
      }
    },
    goToSearch() {
      this.$router.push("/products");
    },
    showDiscount() {
      this.showTicket();
    },
  },
};
</script>

<style scoped>
.player-button .player-toast {
  display: none;
}
.player-button:hover > .player-toast {
  display: block;
}
</style>