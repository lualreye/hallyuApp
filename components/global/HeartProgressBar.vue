<template>
  <div class="w-32 flex justify-center items-center relative">
    <div class="flex justify-center items-center">
      <div class="w-32 flex justify-center items-center">
        <heart-rating
          :item-size="16"
          :increment="0.5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
};
</script>

