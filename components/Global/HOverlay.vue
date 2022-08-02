<template>
  <button
    v-show="getOverlay"
    class="
      w-screen
      fixed
      top-0
      left-0
      right-0
      bottom-0
      z-40
      h-screen
      bg-primary
      opacity-50
    "
    @click="closeMenu"
  ></button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
    ...mapGetters("cart", ["showCart"]),
    ...mapGetters("likes", ["getLiked"]),
    getOverlay() {
      return this.showMenu || this.showCart || this.getLiked;
    },
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    ...mapActions("cart", ["activeCart"]),
    ...mapActions("likes", ["showLikedProducts"]),
    closeMenu() {
      if (this.showMenu) {
        this.activeMenu(false);
      } else if (this.showCart) {
        this.activeCart(false);
      } else if (this.getLiked) {
        this.showLikedProducts(false);
      } else {
        return;
      }
    },
  },
};
</script>
