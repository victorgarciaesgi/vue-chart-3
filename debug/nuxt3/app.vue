<template>
  <div id="app" :style="{ width: '400px' }">
    <button @click="shuffleData">Shuffle</button>
    <BarChart v-bind="barChartProps" class="test" />
  </div>
</template>

<script setup lang="tsx">
import type { ChartData } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
// import { BarChart, defineChartComponent, useBarChart } from '../../dist';

import { ref, computed } from 'vue';
import { shuffle } from 'lodash-es';

const data = ref([30, 40, 60, 70, 5]);
const legendTop = ref(true);

// const barChartRef = ref(null);

const options = computed(() => ({
  scales: {
    myScale: {
      type: 'logarithmic',
      position: legendTop.value ? 'left' : 'right',
    },
  },
  plugins: {
    legend: {
      position: legendTop.value ? 'top' : 'bottom',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
}));

const testData = computed<ChartData<'bar'>>(() => ({
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ],
}));

const { barChartProps, barChartRef } = useBarChart({
  chartData: testData,
  options: options,
});

function shuffleData() {
  data.value = shuffle(data.value);
  console.log(barChartRef.value.chartInstance);
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
