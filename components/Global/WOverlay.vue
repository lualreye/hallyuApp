<template>
  <div
    v-show="getModal"
    class="w-screen h-screen bg-gray-100 opacity-70 flex justify-center items-center fixed z-40 top-0 left-0 right-0 bottom-0"
    @click="closeModal"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getModal"]),
  },
  methods: {
    ...mapActions("user", ["showModal", "activeSignIn", "activeSignUp"]),
    closeModal() {
      if (this.getModal) {
        this.showModal(false);
        this.activeSignIn(false);
        this.activeSignUp(false);
      }
    },
  },
};
</script>
