<template>
  <div class="flex flex-col min-h-screen bg-background">
    <TheHeader />
    <TheMenu />
    <TheCart />
    <TheLiked />
    <GlobalHOverlay />
    <GlobalWOverlay />
    <Nuxt />
    <Player />
    <Playlist />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Player from "../components/Global/Player.vue";
import Playlist from "../components/Global/Playlist.vue";
export default {
  components: { Player, Playlist },
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("user", ["getModal", "getUser"]),
    ...mapGetters("userData", ["getProfile"]),
    stopScrolling() {
      return this.showMenu || this.showCart || this.getModal;
    },
    getOverlay() {
      return this.showMenu || this.showCart || this.getModal;
    },
  },
  watch: {
    getOverlay(value) {
      if (value) {
        this.stopBodyScrolling(value);
      } else {
        this.stopBodyScrolling(value);
      }
    },
    getUser(value) {
      if (value === null || undefined) {
        return;
      }
      if (value.role.costumer) {
        this.$router.push("/");
      }
      if (value.role.adminRole) {
        this.$router.push("/admin/dashboard");
      }
    },
  },
  methods: {
    ...mapActions("likes", ["fetchLikedProducts"]),
    stopBodyScrolling(value) {
      if (value) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = null;
      }
    },
  },
};
</script>
