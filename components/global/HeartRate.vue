<template>
  <div class="w-32 flex justify-center items-center relative">
    <div class="flex justify-center items-center">
      <div class="w-32 flex justify-center items-center">
        <heart-rating
          :item-size="16"
          :show-rating="false"
          :read-only="read"
          :rating="rating"
          active-color="#FF98C9"
          inactive-color="#cbd5e0"
          border-color="#FF98C9"
          :spacing=2
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
      required: null
    },
    read: {
      type: Boolean,
      required: true
    },
  }
};
</script>

