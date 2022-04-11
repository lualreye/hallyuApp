<template>
  <div class="flex flex-col min-h-screen bg-background">
    <TheHeader />
    <TheMenu />
    <TheCart />
    <GlobalHOverlay />
    <GlobalWOverlay />
    <TheSignIn />
    <TheSignUp />
    <Nuxt />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("user", ["getModal", "getUser"]),
    stopScrolling() {
      return this.showMenu || this.showCart || this.getModal;
    },
    getOverlay() {
      return this.showMenu || this.showCart || this.getModal;
    },
    redirection() {
      if (this.getUser ===  null || this.getUser === undefined) {
        return
      } else (this.getUser.role)
    }
  },
  watch: {
    getOverlay(value) {
      if (value) {
        this.stopBodyScrolling(value);
      } else {
        this.stopBodyScrolling(value);
      }
    },
  },
  methods: {
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
