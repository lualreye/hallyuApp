<template>
  <div
    v-if="show"
    class="
      ticket
      fixed
      z-30
      shadow-xl
      bg-white
      p-2
      rounded-lg
    "
  >
    <div
      class="
        w-full
        flex
        justify-center
        items-center
        border border-dashed border-secondary
        rounded-xl
        bg-white
        py-2
      "
    >
      <div
        class="
          flex
          justify-center
          items-center
          w-2/5
          border-r border-dashed border-secondary
        "
      >
        <img :src="logo" alt="hallyu" class="w-1/4" />
      </div>
      <div class="flex flex-col justify-center items-center w-3/5 px-10">
        <p class="text-primary font-medium text-lg w-full font-open">
          Código de descuento
        </p>
        <p
          v-if="getDiscount.code.length"
          class="text-xl text-secondary font-junegull w-full my-4"
        >
          {{ getDiscount.code }}
        </p>
        <p v-else class="text-xl font-junegull w-full">
          No tenemos código disponible
        </p>
        <p
          v-if="getDiscount.code.length"
          class="text-xs font-medium w-full font-open text-purple-500"
        >
          Obtén un descuento en tu siquiente {{ getDiscount.codeDiscount }} compra
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    }
  },
  data: () => ({
    logo: require("../../static/images/logo/imagotipo.png"),
    width: null,
  }),
  computed: {
    ...mapGetters("general", ["getDiscount"]),
  }
};
</script>

<style scoped>
.ticket {
  width: 80%;
  bottom: 10%;
  left: 10%;
}
</style>