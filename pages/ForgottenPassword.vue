<template>
  <div
    class="
      w-4/5
      max-w-sm
      mt-16
      mx-auto
      p-10
      rounded-md
      bg-white
      border border-gray-300
      shadow-md
    "
  >
    <div v-if="!getRecoveryEmail">
      <label class="w-full text-secondary"> Email </label>
      <input
        type="email"
        v-model="email"
        class="w-full my-3 rounded-md border border-secondary p-2"
      />
      <button
        class="w-full py-3 px-3 text-white rounded-md"
        :class="{ 'bg-primary': emailIsValid, 'bg-gray-400': !emailIsValid }"
        :disabled="!emailIsValid"
        @click="recovering"
      >
        Recuperar contraseña
      </button>
    </div>
    <div v-else>
      <div class="w-8 h-8 mx-auto">
        <HIcon name="email" class="w-full text-primary mx-auto mb-4" />
      </div>
      <p class="text-secondary text-xl text-bold font-open">
        Hemos enviado un correo para resetar tu password, no olvides revisar tu
        carpeta de spam 😅
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    email: "",
  }),
  computed: {
    ...mapGetters("user", ["getRecoveryEmail"]),
    emailIsValid() {
      return this.validEmail(this.email);
    },
  },
  methods: {
    ...mapActions("user", ["recoverPassword"]),
    recovering() {
      this.recoverPassword(this.email);
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>