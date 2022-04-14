<template>
  <div class="w-full h-8 flex justify-center items-center">
    <div class="w-3/5 flex justify-center items-center">
      <figure
        class="w-8 h-8 flex justify-center items-center rounded-lg bg-lightPink"
      >
        <img
          :src="productImage"
          :alt="productName"
          class="w-full object-cover object-center"
        />
      </figure>
      <p class="text-sm font-open text-hBlack">
        {{ productName }}
      </p>
    </div>
    <div class="w-2/5 flex flex-col justify-center items-center">
      <p class="text-xs font-open text-hBlack w-full">
        {{ salesNumber }}
      </p>
      <div
        id="progressBar"
        class="w-full h-1 flex justify-start items-center bg-gray-300 rounded-full"
      >
        <div id="myBar" class="h-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productImage: {
      type: String,
      required: true,
      default: "",
    },
    productName: {
      type: String,
      required: true,
      default: "Producto no disponible",
    },
    salesNumber: {
      type: Number,
      required: true,
      default: 60,
    },
    salesTotal: {
      type: Number,
      required: true,
      default: 200
    },
    color: {
      type: String,
      required: true,
      default: "#D4F1F0"
    }
  },
  mounted() {
    const myBar = document.querySelector("#myBar");
    const progressBar = document.querySelector("#progressBar").clientWidth;
    const progress = (this.salesNumber * 100) / this.salesTotal
    myBar.style.backgroundColor = `${this.color}`
    myBar.style.width = `${progress}%`
  },
};
</script>
