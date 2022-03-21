<template>
  <div id="app" :style="{ width: '400px' }">
    <button @click="shuffleData">Shuffle</button>
    <DoughnutChart v-bind="doughnutChartProps" />
    {{ data }} {{ labels }} {{ index }}
  </div>
</template>

<script setup lang="ts">
import { Chart, ChartOptions, registerables } from 'chart.js';
import type { ChartData } from 'chart.js';
// import { BarChart, useBarChart } from 'vue-chart-3';
import { DoughnutChart, defineChartComponent, useDoughnutChart } from '../../../dist';

import { ref, computed } from 'vue';

Chart.register(...registerables);

const data = ref([30, 40, 60, 70, 5]);
const labels = ref(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']);
const legendTop = ref(true);

const options = computed<ChartOptions<'doughnut'>>(() => ({
  scales: {
    myScale: {
      type: 'logarithmic',
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
}));

const testData = computed<ChartData<'doughnut'>>(() => ({
  labels: labels.value,
  datasets: [
    {
      data: data.value,
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ],
}));

const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
  chartData: testData,
  options: options,
});

let index = ref(20);

function shuffleData() {
  // data.value = shuffle(data.value);
  data.value.push(index.value);
  labels.value.push('Autre' + index.value);
  index.value++;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
