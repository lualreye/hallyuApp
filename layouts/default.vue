<template>
  <div class="flex flex-col min-h-screen bg-background">
    <TheHeader />
    <TheMenu />
    <TheCart />
    <GlobalHOverlay />
    <GlobalWOverlay />
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
      if(value === null || undefined) {
        return
      } else if (value.role.adminRole) {
        this.$router.push("/admin/dashboard")
      }
    }
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
