<template>
  <div class="flex flex-col min-h-screen bg-background">
    <TheHeader />
    <TheMenu />
    <TheCart />
    <GlobalHOverlay />
    <Nuxt />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
    stopScrolling() {
      return this.showMenu || this.showCart;
    },
    getOverlay() {
      return this.showMenu || this.showCart;
    },
  },
  watch: {
    getOverlay(value) {
      if (value) {
        this.stopBodyScrolling(value);
      } else {
        this.stopBodyScrolling(value)
      }
    },
  },
  methods: {
    stopBodyScrolling(value) {
      if (value) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = null

      }
    },
  },
};
</script>
