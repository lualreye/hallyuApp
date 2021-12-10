<template>
  <div class="w-full mt-16 px-4 py-6">
    <!-- TITULO DE LOS PRODUCTOS QUE ESTAN CON OFERTA -->
    <div
      class="w-full flex flex-col justify-center lg:justify-start items-start"
    >
      <div
        class="
          w-full
          flex flex-col
          justify-center
          lg:justify-start
          items-center
          md:items-baseline
          h-20
        "
      >
        <div class="flex justify-center items-end">
          <h2
            class="
              text-xl
              sm:text-4xl
              text-center
              sm:text-left
              font-junegull
              text-textColor
            "
          >
            Hallyu Stock
          </h2>
          <p class="ml-2 font-open font-bold text-xl text-textColor">por tu</p>
          <div class="parenthesis-two w-11 h-11 relative">
            <tenth-type />
          </div>
        </div>
        <div class="flex justify-center items-end">
          <p
            class="
              text-xl
              sm:text-4xl
              text-right
              sm:text-left
              font-junegull
              text-textColor
              md:ml-48
            "
          >
            Banda
          </p>
          <p class="ml-2 font-open font-bold text-xl text-right text-textColor">
            favorita
          </p>
        </div>
      </div>
      <div
        class="mx-auto w-full flex justify-center lg:justify-start items-center"
      ></div>
    </div>
    <!-- SECCION DE RENDERIZADO DE LAS TARJETAS -->
    <div
      class="
        flex
        justify-center
        mt-4
        py-6
        lg:mt-8 lg:py-12
        items-center
        flex-wrap
      "
    >
      <div
        v-for="(band, i) in bands"
        :key="i"
        class="
          flex
          justify-center
          items-center
          w-full
          sm:w-1/2
          md:w-1/3
          lg:w-1/4
          mb-8
        "
      >
        <band-card :bandImage="band.bandImage" :bandName="band.bandName" />
      </div>
    </div>
  </div>
</template>

<script>
import TenthType from "~/components/parenthesis/TenthType.vue";
import BandCard from "~/components/cards/BandCard";
export default {
  components: {
    TenthType,
    BandCard,
  },
  props: {
    bands: {
      type: Array,
      required: true,
    },
  },
};
</script>
