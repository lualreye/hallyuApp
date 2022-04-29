<template>
  <div
    v-if="getSignIn"
    class="w-2/3 md:w-4/12 left-1/6 md:left-1/3 top-24 fixed z-50 bg-aquamarine p-1 rounded-md opacity-100"
  >
    <div
      class="w-full h-full rounded-3xl py-2 px-3 flex flex-col justify-between items-start border border-secondary"
    >
      <!-- CLOSE BUTTON -->
      <div class="w-full flex justify-end items-start px-2 py-1">
        <button
          class="w-5 h-5 rounded-full border border-secondary flex justify-center items-center"
          @click="closeSingIn"
        >
          <GlobalHIcon name="close" />
        </button>
      </div>
      <!-- CONTENT CONTAINER -->
      <div class="w-full flex flex-col jutify-center items-center my-4">
        <p class="w-full text-left text-textColor font-medium font-open">
          Ingresa con
        </p>
        <!-- GOOGLE BUTTON -->
        <div class="my-4 w-full flex justify-center items-center py-2">
          <GlobalGoogleButton />
        </div>
        <!-- EMAIL LOGIN -->
        <div class="w-full flex flex-col justify-start items-center">
          <div class="w-full flex h-6 justify-between items-center mb-4">
            <div class="w-10/12 h-px bg-gray-400" />
            <p class="text-gray-400 text-center mx-1">o</p>
            <div class="w-10/12 h-px bg-gray-400" />
          </div>
          <!-- EMAIL INPUT -->
          <div class="w-full flex flex-col justify-center items-start">
            <label for="" class="text-lg text-textColor"> Email </label>
            <input
              type="email"
              v-model="email"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-aquamarine text-textColor rounded-lg border border-secondary placeholder-textColor text-base focus:bg-white outline-none focus:outline-none"
              placeholder="junegull@gmail.com"
            />
            <span
              v-if="!checkMail"
              class="w-full rounded-sm mt-1 py-2 px-3 bg-red-300 text-xs font-medium text-red-600"
            >
              Por favor ingresa un correo valido
            </span>
          </div>
          <!-- PASSWORD INPUT -->
          <div class="w-full flex flex-col justify-center items-start mt-4">
            <label for="" class="text-lg text-textColor"> Contraseña </label>
            <input
              type="password"
              v-model="password"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-aquamarine rounded-lg border border-secondary placeholder-textColor text-base focus:bg-white outline-none focus:outline-none"
              placeholder="********"
            />
            <span
              v-if="!checkPassword"
              class="w-full rounded-sm mt-1 py-2 px-3 bg-red-300 text-xs font-medium text-red-600"
            >
              Tu contraseña debe tener al menos 8 caracteres, un número, una
              minúscula y una mayúscula
            </span>
          </div>
          <!-- FORGOTTEN PASSWORD -->
          <nuxt-link
            to="/ForgottenPassword"
            class="text-xs text-textColor font-md w-full mt-2"
          >
            ¿Olvidaste tu contraseña?
          </nuxt-link>
          <!-- INICIA SESION -->
          <button
            class="mt-6 px-3 py-2 rounded-xl shadow-lg border"
            :disabled="!formIsValid"
            :class="buttonClasses"
            @click="signInUser"
          >
            Iniciar sesión
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
    email: "",
    password: "",
  }),
  computed: {
    ...mapGetters("user", ["getModal", "getSignIn"]),
    formIsValid() {
      return this.checkMail && this.checkPassword;
    },
    checkMail() {
      return this.validEmail(this.email);
    },
    checkPassword() {
      return this.validPassword(this.password);
    },
    buttonClasses() {
      return this.formIsValid === false
        ? "bg-gray-400 text-white border-gray-400"
        : "border-primary text-white bg-primary";
    },
  },
  methods: {
    ...mapActions("user", ["showModal", "activeSignIn", "signInWithGoogle", "signInWithEmail"]),
    closeSingIn() {
      if (this.getModal) {
        this.showModal(false);
        this.activeSignIn(false);
      }
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword(password) {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      return re.test(password);
    },
    signInUser() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.signInWithEmail(user)
    },
  },
};
</script>
