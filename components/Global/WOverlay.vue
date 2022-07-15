<template>
  <div
    v-show="getModal || getProfile"
    class="
      w-screen
      h-screen
      bg-gray-100
      opacity-70
      flex
      justify-center
      items-center
      fixed
      z-index
      top-0
      left-0
      right-0
      bottom-0
    "
    @click="closeModal"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getModal"]),
    ...mapGetters("userData", ["getProfile"]),
  },
  methods: {
    ...mapActions("user", ["showModal", "activeSignIn", "activeSignUp"]),
    ...mapActions("userData", ["showProfile"]),
    closeModal() {
      if (this.getModal) {
        this.showModal(false);
        this.activeSignIn(false);
        this.activeSignUp(false);
      }
      this.showProfile(false);
    },
  },
};
</script>

<style scoped>
.z-index {
  z-index: 25;
}
</style>
