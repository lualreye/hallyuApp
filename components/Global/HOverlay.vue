<template>
  <button
    v-show="getOverlay"
    class="
      w-screen
      position
      absolute
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
    getOverlay() {
      return this.showMenu || this.showCart;
    },
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    ...mapActions("cart", ["activeCart"]),
    closeMenu() {
      if (this.showMenu) {
        this.activeMenu(false);
      } else if (this.showCart) {
        this.activeCart(false);
      } else {
        return;
      }
    },
  },
};
</script>
