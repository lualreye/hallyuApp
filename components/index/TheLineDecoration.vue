<template>
  <div class="w-full h-7 flex justify-center items-center" :style="{backgroundColor: color}">
    <div class="w-full max-w-md fkex justify-center items-center">
      <p class="text-background font-open">
        {{ spanishTest }}
      </p>
      <p class="text-background font-open">
        {{ koreanTest }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    spanishText: {
      type:String,
      required: true,
      default: Hallyu
    },
    koreanText: {
      type:String,
      required: true,
      default: Coreano
    },
  }
}
</script>