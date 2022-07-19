<template>
  <div class="w-full flex-col flex justify-start items-start p-3">
    <div class="w-full flex justify-start items-center">
      <figure
        class="
          w-6
          h-6
          flex
          justify-start
          items-center
          bg-primary
          rounded-full
          mr-2
        "
      >
        <img
          v-if="comment.user.image.length"
          :src="comment.user.image"
          :alt="comment.user.name"
          class="w-full h-6 rounded-full"
        />
        <HIcon v-else name="userAccount" class="text-white" />
      </figure>
      <p class="text-hBlack text-sm font-open">
        {{ comment.user.name }}
      </p>
    </div>
    <p class="text-open border-b border-b-primary text-hBlack">
      {{ comment.comment }}
    </p>
  </div>
</template>

<script>
import HIcon from "@/components/Global/HIcon.vue";

export default {
  components: {
    HIcon,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>