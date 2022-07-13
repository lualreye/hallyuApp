<template>
  <button
    class="w-8 h-8 rounded-md border border-secondary flex justify-center items-center shadow-md"
    @click="loginWithGoogle"
  >
    <img :src="googleImage" class="w-6 h-6" />
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    googleImage: require("@/static/images/logo/google.png"),
  }),
  methods: {
    ...mapActions("user", ["loginWithGoogle"]),
    signInWithGoogle() {
      this.loginWithGoogle();
    },
  },
};
</script>
