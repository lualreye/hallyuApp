<template>
  <div
    class="w-48 h-48 flex justify-center items-center card-hover"
    :class="{
      'rotated-1': isEven,
      'rotated-2': !isEven,
    }"
  >
    <div class="relative rounded-xl">
      <div class="bg-secondary w-48 h-48 rounded-xl">
        <figure class="image-hover w-48 h-48 absolute bottom-2 right-2 bg-lightPink p-2 rounded-xl flex justify-center items-center">
          <img :src="image" :alt="categoryName" class="rounded-xl w-full" />
          <div class="w-48 h-48 absolute top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center bg-gray-700 opacity-30 rounded-xl">
            <p class="text-white text-xl font-open font-bold">
              {{ categoryName }}
            </p>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  computed: {
    isEven() {
      return this.order % 2 === 0 ? true : false;
    },
  },
};
</script>

<style scoped>
.rotated-1 {
  transform: rotate(8deg);
}
.rotated-2 {
  transform: rotate(-12deg);
}
.card-hover:hover {
  z-index: 30;
  cursor: pointer;
}
</style>
