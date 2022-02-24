<template>
  <div
    v-if="getSignUp"
    class="w-2/3 md:w-4/12 left-1/6 md:left-1/3 top-1/3 relative z-50 bg-lightPink p-1 rounded-md"
  >
    <div
      class="w-full h-full rounded-3xl py-1 px-3 flex flex-col justify-between items-start border border-secondary"
    >
      <!-- CLOSE BUTTON -->
      <div class="w-full flex justify-end items-start px-2 py-1">
        <button
          class="w-5 h-5 rounded-full border border-secondary flex justify-center items-center"
          @click="closeSignUp"
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
        <div class="my-1 w-full flex justify-center items-center py-2">
          <GlobalGoogleButton />
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
            <label for="" class="text-lg text-textColor"> Nombre </label>
            <input
              type="name"
              required
              v-model="name"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-white rounded-lg border border-secondary placeholder-textColor text-base focus:bg-white outline-none focus:outline-none text-secondary focus:text-secondary"
              placeholder="Han"
            />
            <span
              v-if="!isNameVerified"
              class="w-full rounded-sm mt-1 py-2 px-3 bg-red-300 text-xs font-medium text-red-600"
            >
              Hallyu quiere saber tu nombre
            </span>
          </div>
          <!-- EMAIL INPUT -->
          <div class="mt-4 w-full flex flex-col justify-center items-start">
            <label for="" class="text-lg text-textColor"> Email </label>
            <input
              type="email"
              required
              v-model="email"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-white rounded-lg border border-secondary placeholder-textColor text-base focus:bg-white outline-none focus:outline-none text-secondary focus:text-secondary"
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
              required
              v-model="password"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-white rounded-lg border border-secondary placeholder-textColor text-base focus:bg-white outline-none focus:outline-none text-secondary focus:text-secondary"
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
          <!-- PASSWORD INPUT -->
          <div class="w-full flex flex-col justify-center items-start mt-4">
            <label for="" class="text-lg text-textColor">
              Repite tu contraseña
            </label>
            <input
              type="password"
              required
              v-model="passwordRepeated"
              class="mt-2 flex justify-center items-center w-full px-3 py-2 bg-white rounded-lg border border-secondary placeholder-textColor text-base focus:bg-white outline-none focus:outline-none text-secondary focus:text-secondary"
              placeholder="********"
            />
            <span
              v-if="!isPasswordVerified"
              class="w-full rounded-sm mt-1 py-2 px-3 bg-red-300 text-xs font-medium text-red-600"
            >
              Contraseña incorrecta
            </span>
          </div>
          <!-- INICIA SESION -->
          <button
            class="mt-6 px-3 py-2 rounded-xl text-lightPink border shadow-lg"
            :class="buttonReady"
            :disabled="!formIsValid"
            @click="signUserUp"
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
    name: "",
    email: "",
    password: "",
    passwordRepeated: "",
  }),
  computed: {
    ...mapGetters("user", ["getModal", "getSignUp"]),
    isPasswordVerified() {
      return this.password === this.passwordRepeated ? true : false;
    },
    // VALIDATING NAME
    isNameVerified() {
      return this.name !== "" ? true : false;
    },
    // VALIDATING EMAIL
    checkMail() {
      if (this.validEmail(this.email) && this.email !== "") {
        return true;
      } else {
        return false;
      }
    },
    // VALIDATING PASSWORD
    checkPassword() {
      return this.validPassword(this.password);
    },
    // VALIDATING FORM
    formIsValid() {
      return (
        this.isNameVerified &&
        this.checkMail &&
        this.checkPassword &&
        this.isPasswordVerified
      );
    },
    buttonReady() {
      return this.formIsValid === true
        ? "bg-secondary border-secondary"
        : "bg-gray-400 border-gray-400";
    },
  },
  methods: {
    // GETTING  ACTIONS FROM STORE
    ...mapActions("user", ["showModal", "activeSignUp", "signUpWithEmail"]),
    // DISPATCH ACTION TO CAHNGE MODAL STATE
    closeSignUp() {
      if (this.getModal) {
        this.showModal(false);
        this.activeSignUp(false);
      }
    },
    // REGEX TO VALIDATE EMAIL
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword(password) {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      return re.test(password);
    },
    signUserUp() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.signUpWithEmail(user)
    },
  },
};
</script>
