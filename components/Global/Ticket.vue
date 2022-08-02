<template>
  <div v-if="show" class="ticket fixed z-30 shadow-xl bg-white p-2 rounded-lg">
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
        flex-wrap
        relative
      "
    >
      <button
        class="
          absolute
          -top-2
          -right-2
          w-5
          h-5
          flex
          justify-center
          items-center
          rounded-full
          bg-pink-700
        "
        @click="showDiscount"
      >
        <h-icon name="close" class="text-white" />
      </button>
      <div
        class="
          flex
          justify-center
          items-center
          w-full
          sm:w-2/5
          border-r border-dashed border-secondary
        "
      >
        <img :src="logo" alt="hallyu" class="w-1/4" />
      </div>
      <div class="flex flex-col justify-center items-center sm:w-3/5 px-10">
        <p
          class="
            text-primary
            font-medium
            text-center
            sm:text-left
            text-lg
            w-full
            font-open
          "
        >
          Código de descuento
        </p>
        <p
          v-if="getDiscount.code.length"
          class="
            text-xl text-secondary
            font-junegull
            w-full
            my-4
            text-center
            sm:text-left
          "
        >
          {{ getDiscount.code }}
        </p>
        <p v-else class="text-xl font-junegull w-full text-center sm:text-left">
          No tenemos código disponible
        </p>
        <p
          v-if="getDiscount.code.length"
          class="
            text-xs
            font-medium
            w-full
            font-open
            text-purple-500 text-center
            sm:text-left
          "
        >
          Obtén un descuento del {{ getDiscount.codeDiscount }}% en tu siguiente
          compra
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HIcon from "./HIcon.vue";

export default {
  components: { HIcon },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    logo: require("../../static/images/logo/imagotipo.png"),
    width: null,
  }),
  computed: {
    ...mapGetters("general", ["getDiscount"]),
  },
  methods: {
    ...mapActions("general", ["showTicket"]),
    showDiscount() {
      this.showTicket();
    },
  },
};
</script>

<style scoped>
.ticket {
  width: 80%;
  bottom: 10%;
  left: 10%;
}
@media screen and (min-width: 769px) {
  .ticket {
    width: 50%;
    left: 25%;
  }
}
@media screen and (min-width: 1440px) {
  .ticket {
    width: 40%;
    left: 30%;
  }
}
</style>