<template>
  <div class="w-full flex justify-start items-center">
    <figure
      class="
        w-8
        h-8
        rounded-lg
        flex
        justify-center
        items-center
        bg-backgroundPink
        mr-2
      "
    >
      <img
        :src="image"
        :alt="name"
        class="w-full h-8 rounded-lg object-cover object-center"
      />
    </figure>
    <p class="text-hBlack font-open">{{ name.substr(0, 18) }}...</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>