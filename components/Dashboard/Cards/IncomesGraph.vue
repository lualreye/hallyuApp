<template>
  <div
    class="w-full shadow-md border border-aquemarine flex flex-col justify-between items-center rounded-lg p-6"
  >
    <p class="text-hBlack w-full">Ventas históricas</p>
    <div class="w-full">
      <LineChartGenerator
        :chart-options="chartOptions"
        :chart-data="chartData"
        :height="chartHeight"
      />
    </div>
  </div>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  components: {
    LineChartGenerator,
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
    chartHeight: 200,
  }),
};
</script>
