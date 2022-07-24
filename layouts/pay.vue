<template>
  <div class="flex flex-col min-h-screen bg-background bg-image"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Player from "../components/Global/Player.vue";
import Playlist from "../components/Global/Playlist.vue";
export default {
  components: { Player, Playlist },
  data: () => ({
    bgImage: require("../static/images/backgrounds/banner-fondo2.png"),
  }),
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
      if (value.role.userRol) {
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

<style scoped>
.bg-image {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
