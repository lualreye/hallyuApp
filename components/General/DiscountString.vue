<template>
  <div class="w-full flex flex-col justify-center items-start mt-3">
    <button
      class="
        w-96
        flex
        justify-start
        items-center
        border border-text-gray-400
        rounded-lg
        p-2
      "
      @click="openModal"
    >
      <div>
        <div class="w-6 h-6 flex justify-center items-center mr-3">
          <GlobalHIcon :name="getIcon" class="text-textColor" />
        </div>
      </div>
      <p class="text-textColor font-open">Codigo de descuento</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-md mt-3 p-2">
      <div class="w-full flex flex-col justify-between items-start">
        <p class="text-hBlack font-open mb-2">
          Sube tu codigo y un numero como porcentaje de descuento
        </p>
        <!-- FAKE SONG  -->
        <div class="w-full border border-primary rounded-lg py-1 px-2">
          <input v-model="code" :maxlength="max" class="w-full outline-none" />
        </div>
        <div class="w-full border border-primary rounded-lg py-1 px-2 mt-3">
          <input
            v-model="codeDiscount"
            :maxlength="max"
            class="w-full outline-none"
          />
        </div>
      </div>
      <button
        class="w-40 flex justify-center items-center rounded-lg py-2 mt-2"
        :class="{
          'bg-primary': isCodeValid,
          'bg-gray-400': !isCodeValid,
        }"
        :disabled="!isCodeValid"
        @click="upload"
      >
        <p class="text-textColor font-open">Guardar y Publicar</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    code: "",
    codeDiscount: 0,
    max: 24,
    isOpen: false,
  }),
  computed: {
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isCodeValid() {
      if (!this.code.length && !this.codeDiscount) {
        return true;
      }
      if (this.code.length && this.codeDiscount > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions("general", ["uploadDiscountCode"]),
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        // this.fetchHeroImages();
        this.isOpen = true;
      }
    },
    upload() {
      const code = this.code;
      const codeDiscount = this.codeDiscount;
      this.uploadDiscountCode({ code, codeDiscount });
      this.code = "";
      this.codeDiscount = 0;
    },
  },
};
</script>