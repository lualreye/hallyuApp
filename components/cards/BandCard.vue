<template>
  <div class="w-full">
    <div class="flex flex-col justify-center items-center">
      <nuxt-link
        :to="`/bands/${bandName}`"
        class="
          flex
          w-32
          h-36
          sm:w-48 sm:h-40
          p-2
          rounded-xl
          justify-center
          items-center
          border border-secondary
          bg-white
          shadow-xl
        "
      >
        <figure
          class="
            w-36
            h-28
            sm:h-36
            mx-auto
            my-auto
            flex
            justify-center
            items-center
          "
        >
          <img :src="bandImage" :alt="bandName" class="w-full h-28 sm:h-36" />
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
        {{ bandName.toUpperCase() }}
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
