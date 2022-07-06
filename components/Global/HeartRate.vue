<template>
  <div class="flex">
    <heart-rating
      :item-size="16"
      :show-rating="false"
      :read-only="read"
      :rating="rating"
      active-color="#FF98C9"
      inactive-color="transparent"
      border-color="#FF98C9"
      :spacing=2
      :border-width=1
    />
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

