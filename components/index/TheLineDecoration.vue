<template>
  <div
    class="w-full py-1 flex justify-center items-center"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="w-full max-w-xs flex justify-center items-center">
      <p
        class="text-background font-open text-xs mr-3"
        :style="{ color: letterColor }"
      >
        {{ spanishText }}
      </p>
      <p
        class="text-background font-open text-xs"
        :style="{ color: letterColor }"
      >
        {{ koreanText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    spanishText: {
      type: String,
      required: true,
      default: "Hallyu",
    },
    koreanText: {
      type: String,
      required: true,
      default: "Coreano",
    },
    bgColor: {
      type: String,
      required: true,
      default: "#C2847A",
    },
    letterColor: {
      type: String,
      required: true,
      default: "#7F2CCB",
    },
  },
};
</script>
