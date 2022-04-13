<template>
  <div class="w-full">
    <!-- INCOMES SECTION -->
    <div class="w-full flex justify-center items-center flex-wrap">
      <!-- SALES -->
      <div class="w-full lg:w-3/5 flex justify-center items-center p-3">
        <DashboardCardsIncomesGraph />
      </div>
      <!-- INCOME CARDS -->
      <div class="w-full lg:w-2/5 flex justify-center items-center p-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app"
}
</script>