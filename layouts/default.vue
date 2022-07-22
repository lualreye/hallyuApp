<template>
  <div class="flex flex-col min-h-screen bg-background relative">
    <div class="positioned blue first-bg"></div>
    <div class="positioned purple second-bg"></div>
    <div class="positioned pink third-bg"></div>
    <div class="positioned green fourth-bg"></div>
    <TheHeader />
    <TheMenu />
    <TheCart />
    <TheLiked />
    <GlobalHOverlay />
    <GlobalWOverlay />
    <Nuxt />
    <Player />
    <Playlist />
    <Ticket />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Player from "../components/Global/Player.vue";
import Playlist from "../components/Global/Playlist.vue";
import Ticket from "../components/Global/Ticket.vue";
export default {
  components: { Player, Playlist, Ticket },
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
  mounted() {
    this.fetchDiscountCode();
  },
  methods: {
    ...mapActions("likes", ["fetchLikedProducts"]),
    ...mapActions("general", ["fetchDiscountCode"]),
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
.positioned {
  z-index: 1;
  position: fixed;
}

.first-bg {
  background: radial-gradient(
    circle,
    rgba(235, 249, 254, 1) 0%,
    transparent 100%
  );
}
.blue {
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 100%;
}
.second-bg {
  background: rgb(234, 236, 255);
  background: radial-gradient(
    circle,
    rgba(234, 236, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.third-bg {
  background: rgb(253, 240, 243);
  background: radial-gradient(
    circle,
    rgba(253, 240, 243, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.fourth-bg {
  background: rgb(221, 248, 246);
  background: radial-gradient(
    circle,
    rgba(221, 248, 246, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>