<template>
  <div
    class="w-full lg:w-11/12 h-48 flex flex-col justfy-between items-center bg-background border border-aquemarine rounded-lg shadow-md py-1 px-2 md:py-2 md:px-3"
  >
    <div class="w-full">
      <p class="w-full text-hBlack font-open">Ventas por categorias</p>
    </div>
    <div class="flex justify-center items-center">
      <BarChartGenerator
        :chart-options="chartOptions"
        :chart-data="chartData"
        :height="chartHeight"
      />
    </div>
  </div>
</template>

<script>
import { Bar as BarChartGenerator } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  components: {
    BarChartGenerator,
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    chartHeight: 150,
  }),
};
</script>
