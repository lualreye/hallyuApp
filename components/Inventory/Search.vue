<template>
  <div class="w-full">
    <div
      class="w-full flex justify-center items-center border border-primary rounded-lg"
    >
      <div class="w-6 h-6 flex justify-center items-center mr-3">
        <GlobalHIcon name="search" class="text-textColor" />
      </div>
      <input
        v-model="searchProduct"
        type="text"
        class="w-full placeholder-gray-200"
        placeholder="Buscar producto"
        @keyup.enter="search"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchProduct: null,
  }),
  methods: {
    search() {
      if (this.searchProduct === null) {
        alert("Escriba un producto");
      } else {
        console.log(this.searchProduct);
      }
    },
  },
};
</script>
