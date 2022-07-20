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
      <p class="text-textColor font-open">Frase de portada</p>
    </button>
    <div v-if="isOpen" class="w-full max-w-md mt-3 p-2">
      <div class="w-full flex flex-col justify-between items-start">
        <p class="text-hBlack font-open mb-2">
          Sube la frase que acompaña a la portada
        </p>
        <!-- FAKE SONG  -->
        <div class="w-full border border-primary rounded-lg py-1 px-2">
          <input
            v-model="greetings"
            :maxlength="max"
            class="w-full outline-none"
          />
        </div>
      </div>
      <div class="my-3">
        <div></div>
      </div>
      <button
        class="w-40 flex justify-center items-center rounded-lg py-2 mt-2"
        :class="{
          'bg-primary': isString,
          'bg-gray-400': !isString,
        }"
        :disabled="!isString"
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
    greetings: "",
    max: 24,
    isOpen: false,
  }),
  computed: {
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
    isString() {
      return this.greetings.length > 0;
    },
  },
  methods: {
    ...mapActions("general", ["uploadGreetings"]),
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        // this.fetchHeroImages();
        this.isOpen = true;
      }
    },
    upload() {
      const greeting = this.greetings;
      this.uploadGreetings(greeting);
      this.greetings = "";
    },
  },
};
</script>