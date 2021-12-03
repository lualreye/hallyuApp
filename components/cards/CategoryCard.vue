<template>
  <div class="w-48 h-48 flex justify-center items-center">
    <div
      class="relative"
      :class="{
        rotated: isEven,
        'rotated-2': !isEven,
      }"
    >
      <div class="w-full h-full bg-secondary rotated" />
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
.rotated {
  transform: rotate(20deg);
}
.rotated-2 {
  transform: rotate((-15deg));
}
</style>
