<template>
  <div class="w-full h-24 border border-bg-200 shadow-md bg-background rounded-lg p-3">
    <div class="w-full mb-3">
      <p class="text-hBlack text-sm font-open">
        Ingresos
      </p>
      <p class="text-hBlack text-xs font-light font-open">
        Semanal
      </p>
    </div>
    <p class="text-hBlack font-semibold font-open">
      $ {{ monthIncome }}
    </p>
  </div>
</template>


<script>
export default {
  props: {
    monthIncome: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>