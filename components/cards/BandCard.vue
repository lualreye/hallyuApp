<template>
  <div class="w-full">
    <div class="flex flex-col justify-center items-center">
      <nuxt-link
        :to="`bands/${bandName}`"
        class="
          flex
          w-48
          h-40
          p-2
          rounded-xl
          justify-center
          items-center
          border border-secondary
          shadow-xl
        "
      >
        <figure class="w-28 h-28 mx-auto my-auto flex justify-center">
          <img :src="bandImage" :alt="bandName" class="w-full h-full" />
        </figure>
      </nuxt-link>
      <p
        class="
          w-full
          mt-3
          text-center text-lg
          font-medium
          text-textColor
          font-open
        "
      >
        {{ bandName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bandName: {
      type: String,
      required: true,
    },
    bandImage: {
      type: String,
      required: true,
    },
  },
};
</script>
