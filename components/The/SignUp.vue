<template>
  <div
    v-if="getModal"
    class="w-4/12 left-1/3 top-1/3 relative z-50 bg-lightPink p-1 rounded-md"
  >
    <div
      class="w-full h-full rounded-3xl py-2 px-3 flex flex-col justify-between items-start border border-secondary"
    >
      <!-- CLOSE BUTTON -->
      <div class="w-full flex justify-end items-start px-2 py-1">
        <div
          class="w-5 h-5 rounded-full border border-secondary flex justify-center items-center"
        >
          <GlobalHIcon name="close" @close="closeModal" />
        </div>
      </div>
      <!-- CONTENT CONTAINER -->
      <div class="w-full flex flex-col jutify-center items-center my-4">
        <p class="w-full text-left text-textColor font-medium font-open">
          Ingresa con
        </p>
        <!-- GOOGLE BUTTON -->
        <div class="my-4 w-full flex justify-center items-center py-2">
          <button
            class="w-8 h-8 rounded-md border border-secondary flex justify-center items-center"
            @click="loginWithGoogle"
          >
            <img :src="image" class="w-6 h-6" />
          </button>
        </div>
        <!-- EMAIL LOGIN -->
        <div class="w-full flex flex-col justify-start items-center">
          <div class="w-full flex h-6 justify-between items-center mb-4">
            <div class="w-10/12 h-px bg-gray-400" />
            <p class="text-gray-400 text-center mx-1">o</p>
            <div class="w-10/12 h-px bg-gray-400" />
          </div>
          <!-- NAME INPUT -->
          <div class="w-full flex flex-col justify-center items-start">
            <label for="" class="text-lg text-textColor"> name </label>
            <input
              type="name"
              v-model="name"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-secondary rounded-lg border border-secondary placeholder-textColor text-base focus:bg-secondary outline-none focus:outline-none"
              placeholder="Han"
            />
          </div>
          <!-- EMAIL INPUT -->
          <div class="w-full flex flex-col justify-center items-start">
            <label for="" class="text-lg text-textColor"> email </label>
            <input
              type="email"
              v-model="email"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-secondary rounded-lg border border-secondary placeholder-textColor text-base focus:bg-secondary outline-none focus:outline-none"
              placeholder="junegull@gmail.com"
            />
          </div>
          <!-- PASSWORD INPUT -->
          <div class="w-full flex flex-col justify-center items-start mt-4">
            <label for="" class="text-lg text-textColor"> Contraseña </label>
            <input
              type="password"
              v-model="password"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-secondary rounded-lg border border-secondary placeholder-textColor text-base focus:bg-secondary outline-none focus:outline-none"
              placeholder="********"
            />
          </div>
          <!-- PASSWORD INPUT -->
          <div class="w-full flex flex-col justify-center items-start mt-4">
            <label for="" class="text-lg text-textColor">
              Repite tu contraseña
            </label>
            <input
              type="password"
              v-model="passwordRepeated"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-secondary rounded-lg border border-secondary placeholder-textColor text-base focus:bg-secondary outline-none focus:outline-none"
              placeholder="********"
            />
          </div>
          <!-- INICIA SESION -->
          <button
            class="mt-6 px-3 py-2 rounded-xl bg-secondary text-lightPink border border-secondary shadow-lg"
          >
            Regístrate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    image: require("@/static/images/logo/google.png"),
    name: "",
    email: "",
    password: "",
    passwordRepeated: "",
    isPasswordRepeated: "",
  }),
  computed: {
    ...mapGetters("user", ["getModal"]),
    isPasswordVerified() {
      return this.password === this.isPasswordRepeated ? true : false;
    },
  },
  methods: {
    ...mapActions("user", ["showModal"]),
    closeModal() {
      if (this.getModal) {
        this.showModal(false);
      }
    },
    loginWithGoogle() {
      console.log("estamos conectando con google");
    },
  },
};
</script>
