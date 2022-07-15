<template>
  <div class="w-full mt-16">
    <div class="w-full">
      <!-- SECCION DE CTA -->
      <div
        class="
          w-full
          flex
          justify-center
          items-center
          py-8
          my-auto
          cta-image
          relative
        "
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
      >
        <div class="relative w-full max-w-7xl mx-auto py-20">
          <div
            class="
              w-40
              h-40
              bg-primary
              shadow-lg
              rounded-full
              absolute
              top-0
              right-3/4
              z-0
            "
          />
          <div
            class="
              bg-white
              rounded-3xl
              w-3/4
              md:w-7/12
              py-8
              px-4
              shadow-lg
              relative
              z-10
              mx-auto
            "
          >
            <p
              class="
                mb-3
                text-textColor text-lg
                font-medium
                text-center
                font-open
              "
            >
              Regístrate y forma parte de nuestra comunidad
            </p>
            <p class="mb-3 text-3xl font-junegull text-center text-primary">
              HALLYU
            </p>
            <p
              class="
                mb-3
                font-light
                text-sm
                font-open
                text-center text-textColor
              "
            >
              Recibe notifiaciones de ofertas especiales
            </p>
            <p
              class="
                mb-3
                text-textColor text-lg
                font-medium
                text-center
                font-open
              "
            >
              Obtén beneficios en tu primera compar
            </p>
            <div class="mx-auto w-44 justify-center items-center">
              <GlobalHButton
                name="Registrarse"
                buttonColor="secondary"
                @click="toSignUp"
              />
            </div>
          </div>
          <div
            class="
              w-16
              h-16
              bg-primary
              shadow-lg
              rounded-full
              absolute
              bottom-8
              right-8
              md:right-64
              z-20
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    bgImage: require("~/static/images/backgrounds/Doodle.svg"),
  }),
  computed: {
    ...mapGetters("user", ["showModal"]),
  },
  methods: {
    ...mapActions("user", ["activeSignIn", "activeSignUp", "showModal"]),
    toSignUp() {
      this.showModal(true);
      this.activeSignUp(true);
    },
  },
};
</script>
