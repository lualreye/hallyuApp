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
        "
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
      >
        <div class="bg-white rounded-xl w-72 lg:w-3/4 py-4 shadow-lg">
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
            class="mb-3 font-light text-sm font-open text-center text-textColor"
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
            <h-button
              name="Registrarse"
              buttonColor="secondary"
              @click="probando"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HButton from "~/components/global/HButton.vue";
export default {
  components: {
    HButton,
  },
  data: () => ({
    bgImage: require("~/static/images/backgrounds/Doodle.svg")
  }),
  methods: {
    probando() {
      console.log("probando desde cta, estoy vivooooo");
    },
  },
};
</script>
