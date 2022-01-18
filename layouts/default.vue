<template>
  <div class="flex flex-col min-h-screen bg-background">
    <the-header />
    <the-menu />
    <the-cart />
    <h-overlay />
    <Nuxt />
    <the-footer class="mt-auto" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HOverlay from "../components/global/HOverlay.vue";
import TheCart from "../components/TheCart.vue";
export default {
  components: { HOverlay, TheCart },
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
        this.stopBodyScrolling();
      }
    },
  },
  methods: {
    stopBodyScrolling() {
      document.documentElement.style.overflow = 'hidden'
    },
  },
};
</script>
