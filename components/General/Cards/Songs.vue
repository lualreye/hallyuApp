<template>
  <div class="w-full flex justify-start items-center">
    <div
      class="w-8 h-8 mr-3 bg-aquamarine flex justify-center items-center rounded-lg"
    >
      <GlobalHIcon name="play" class="text-textColor" />
    </div>
    <p class="text-textColor font-open">
      {{ songName }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    songName: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
    id: {
      type: String,
      required: true,
      default: "Nombre de imagen",
    },
  },
};
</script>
