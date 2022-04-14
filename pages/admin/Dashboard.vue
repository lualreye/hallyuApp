<template>
  <div
    class="w-full flex flex-col shrink justify-center items-center p-1 md:px-4 md:py-1 overflow-auto"
  >
    <!-- INCOMES SECTION -->
    <div class="w-full flex justify-center items-center flex-wrap">
      <!-- SALES -->
      <div class="w-full lg:w-3/5 flex justify-center items-center px-1 my-3">
        <DashboardCardsIncomesGraph :chart-data="chartData" />
      </div>
      <!-- INCOME CARDS -->
      <div
        class="w-full lg:w-2/5 grid grid-cols-2 grid-rows-2 place-items-center gap-2 sm:gap-4 px-1 my-3"
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
    <!-- DETAIL SECTION -->
    <div class="w-full flex flex-wrap justify-between items-center mt-6">
      <!-- ANALYTIC SECTION -->
      <div class="w-full lg:w-2/5 flex justify-between items-center">
        <div
          class="w-1/2 lg:w-5/12 flex justify-start lg:justify-center items-center"
        >
          <DashboardCardsWebVisits :visits="visits" />
        </div>
        <div
          class="w-1/2 lg:w-5/12 flex justify-end lg:justify-center items-center"
        >
          <DashboardCardsCartForgotten :forgottenCarts="forgottenCarts" />
        </div>
      </div>
      <!-- CATEGORIES SECTION -->
      <div class="w-full lg:w-3/5 flex justify-center items-center mt-6 lg:mt-0">
        <DashboardCardsCategoriesSales :chartData="barData" />
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
    barData: {
      labels: ["Moda", "Comida", "Albumes", "Bebidas", "Accesorios"],
      datasets: [
        {
          label: "Categorías",
          backgroundColor: "#87C7C9",
          data: [4000, 2000, 1200, 4000, 2000],
        },
      ],
    },
    monthIncome: 1240,
    orders: 22,
    ordersInProcess: 16,
    ordersReceived: 56,
    forgottenCarts: 123,
    visits: 1850,
  }),
};
</script>
