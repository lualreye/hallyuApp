<template>
  <div class="w-full max-w-screen-2xl mx-auto py-4">
    <div
      class="
        w-full
        h-full
        rounded-3xl
        py-2
        px-3
        flex flex-col
        justify-between
        items-start
      "
    >
      <!-- CONTENT CONTAINER -->
      <div
        class="
          w-full
          max-w-xl
          mx-auto
          flex flex-col
          jutify-center
          items-center
          my-4
        "
      >
        <p
          class="
            w-full
            text-center text-lg
            font-semibold
            text-textColor
            font-junegull
          "
        >
          Ingresa con
        </p>
        <!-- GOOGLE BUTTON -->
        <!-- <div class="my-4 w-full flex justify-center items-center py-2">
          <GlobalGoogleButton />
        </div> -->
        <!-- EMAIL LOGIN -->
        <div class="w-full flex flex-col justify-start items-center">
          <div class="w-full flex h-6 justify-between items-center mb-4">
            <div class="w-10/12 h-px bg-gray-400" />
            <p class="text-gray-400 text-center mx-1">o</p>
            <div class="w-10/12 h-px bg-gray-400" />
          </div>
          <!-- EMAIL INPUT -->
          <div class="w-full flex flex-col justify-center items-start">
            <label for="" class="text-lg text-textColor font-junegull">
              Email
            </label>
            <input
              type="email"
              v-model="email"
              class="
                mt-2
                flex
                justify-center
                items-center
                w-full
                px-3
                py-2
                bg-gray-200
                text-textColor
                rounded-lg
                border border-textColor
                placeholder-textColor
                text-base
                focus:bg-white
                outline-none
                focus:outline-none
              "
              placeholder="Ej: correo@ejemplo.com"
            />
            <span
              v-if="!checkMail"
              class="
                w-full
                rounded-sm
                mt-1
                py-2
                px-3
                bg-lightPink
                text-xs
                font-medium
                text-red-600
                font-open
                italic
              "
            >
              Por favor ingresa un correo valido
            </span>
          </div>
          <!-- PASSWORD INPUT -->
          <div class="w-full flex flex-col justify-center items-start mt-4">
            <label for="" class="text-lg text-textColor font-junegull">
              Contraseña
            </label>
            <input
              type="password"
              v-model="password"
              class="
                mt-2
                flex
                justify-center
                items-center
                w-full
                px-3
                py-2
                bg-gray-300
                rounded-lg
                border border-textColor
                placeholder-textColor
                text-base
                focus:bg-white
                outline-none
                focus:outline-none
              "
              placeholder="********"
            />
            <span
              v-if="!checkPassword"
              class="
                w-full
                rounded-sm
                mt-1
                py-2
                px-3
                bg-lightPink
                text-xs
                font-medium
                text-red-600
                font-open
                italic
              "
            >
              Tu contraseña debe tener al menos 8 caracteres
            </span>
          </div>
          <!-- FORGOTTEN PASSWORD -->
          <nuxt-link
            to="/ForgottenPassword"
            class="text-xs text-textColor font-md w-full mt-2"
          >
            ¿Olvidaste tu contraseña?
          </nuxt-link>
          <nuxt-link
            to="/SignUp"
            class="text-xs text-blue-600 underline font-md w-full mt-2"
          >
            ¿Aún no tienes cuenta?
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
    email: "luisreyes@gmail.com",
    password: "Password123",
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
      return this.password.length >= 8;
    },
    buttonClasses() {
      return this.formIsValid === false
        ? "bg-gray-400 text-white border-gray-400"
        : "border-primary text-white bg-primary";
    },
  },
  methods: {
    ...mapActions("user", [
      "showModal",
      "activeSignIn",
      "signInWithGoogle",
      "signInWithEmail",
    ]),
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
    signInUser() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.signInWithEmail(user);
    },
  },
};
</script>
