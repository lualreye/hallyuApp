<template>
  <div class="w-full flex flex-col justify-center items-start mt-3">
    <div
      class="w-96 flex justify-start items-center border border-text-gray-400 rounded-lg p-2"
    >
      <button @click="openModal">
        <div class="w-6 h-6 flex justify-center items-center mr-3">
          <GlobalHIcon :name="getIcon" class="text-textColor" />
        </div>
      </button>
      <p class="text-textColor font-open">Categorías</p>
    </div>
    <div v-if="isOpen" class="w-full mt-3">Estamos subiendo imagenes</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  computed: {
    getIcon() {
      return this.isOpen === true ? "arrowUp" : "arrowDown";
    },
  },
  methods: {
    openModal() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
  },
};
</script>
