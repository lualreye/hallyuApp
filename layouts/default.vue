<template>
  <div class="flex flex-col min-h-screen bg-background">
    <the-header />
    <the-menu />
    <h-overlay />
    <Nuxt />
    <the-footer class="mt-auto" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HOverlay from "../components/global/HOverlay.vue";
export default {
  components: { HOverlay },
  computed: {
    ...mapGetters("config_drawer", ["showMenu"]),
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    closeMenu() {
      if (this.showMenu) {
        console.log("aqui deberia de abrir");
      } else {
        console.log("no hace nada porque esta cerrado");
      }
    },
  },
};
</script>
