<template>
  <div class="w-full mb-4">
    <div class="flex justify-between items-start">
      <!-- LEFT SECTION OF THE CARD -->
      <div class="flex justify-start items-start w-2/3">
        <figure class="w-1/4 ml-3 flex justify-center items-center">
          <img
            :src="image"
            :alt="productName"
            class="flex justify-center items-center"
          />
        </figure>
        <div class="flex flex-col justify-between items-start">
          <p class="w-full text-textColor mb-3 text-xl font-bold font-open">
            {{ productName }}
          </p>
          <p class="text-base text-textColor font-open">
            {{ description.slice(0, 50) }}
          </p>
        </div>
      </div>
      <!-- RIGHT SECTION OF THE CARD -->
      <div class="flex flex-col justify-between">
        <p class="text-xl text-textColor font-open font-bold">
          {{ price }}
        </p>
        <p class="text-secondary font-bold">
          {{ discount }} %
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      Type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: null,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
