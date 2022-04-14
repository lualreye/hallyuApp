<template>
  <div class="w-11/12 sm:w-full flex justify-center items-center">
    <!-- INCOMES SECTION -->
    <div class="w-full flex justify-center items-center flex-wrap">
      <!-- SALES -->
      <div class="w-full lg:w-3/5 flex justify-center items-center px-1 my-3 sm:p-3">
        <DashboardCardsIncomesGraph :chart-data="chartData" />
      </div>
      <!-- INCOME CARDS -->
      <div
        class="w-full lg:w-2/5 grid grid-cols-2 grid-rows-2 place-items-center gap-2 sm:gap-4 px-1 my-3 sm:p-3"
      >
        <div class="w-full">
          <DashboardCardsSalesResume :monthIncome="monthIncome" />
        </div>
        <div class="w-full">
          <DashboardCardsOrders :orders="orders" />
        </div>
        <div class="w-full">
          <DashboardCardsOrdersInProcess :ordersInProcess="ordersInProcess" />
        </div>
        <div class="w-full">
          <DashboardCardsOrdersReceived :ordersReceived="ordersReceived" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
  data: () => ({
    chartData: {
      labels: [
        "January",
        "February",
        "March",
        "January",
        "February",
        "March",
        "January",
        "February",
        "March",
      ],
      datasets: [
        {
          label: "Meses",
          backgroundColor: "#87C7C9",
          data: [4000, 2000, 1200, 4000, 2000, 1200, 4000, 2000, 1200],
        },
      ],
    },
    monthIncome: 1240,
    orders: 22,
    ordersInProcess: 16,
    ordersReceived: 56,
  }),
};
</script>
