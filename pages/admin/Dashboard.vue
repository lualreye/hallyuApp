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
      <div class="w-full lg:w-3/5 flex md:justify-center lg:justify-end items-center mt-6 lg:mt-0">
        <DashboardCardsCategoriesSales :chartData="barData" />
      </div>
    </div>
    <!-- SELLED PRODUCT -->
    <div class="w-full grid grid-rows-1 grid-cols-auto-fit gap-8 my-6">
      <div class="w-full flex justify-center items-center">
        <DashboardCardsMostSelled :salesTotal="mostSelled[0].salesNumber" :products="mostSelled" />
      </div>
      <div class="w-full flex justify-center items-center">
        <DashboardCardsLowestSelled :salesTotal="lowestSelled[9].salesNumber" :products="lowestSelled" />
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
    salesTotal: 1250,
    mostSelled: [
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 2300,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1900,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1800,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1700,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1600,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1500,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1350,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1320,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1220,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 1200,
      },
    ],
    lowestSelled: [
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 20,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 30,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 50,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 70,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 100,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 300,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 400,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 500,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 600,
      },
      {
        image: require("@/static/images/idols/han.jpg"),
        name: "Product de la muerte",
        salesNumber: 700,
      },
    ],
  }),
};
</script>
