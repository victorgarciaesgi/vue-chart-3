<template>
  <div id="app" :style="{ width: '400px' }">
    <button @click="shuffleData">Shuffle</button>
    <button type="button" @click="switchLegend">Swicth legends</button>
    <BarChart v-bind="barChartProps" />
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { Chart, ChartOptions, registerables } from 'chart.js';
import type { ChartData } from 'chart.js';
// import { BarChart, useBarChart } from 'vue-chart-3';
import { BarChart, defineChartComponent, useBarChart } from '../../../../dist';

import { ref, computed } from 'vue';

Chart.register(...registerables);

const data = ref([
  {
    label: 'Foo',
    data: [
      { x: 1620901004000, y: 10 },
      { x: 1620901006000, y: 100 },
      { x: 1620901008000, y: 50 },
    ],
    borderColor: 'SaddleBrown',
  },
  {
    label: 'Bar',
    data: [
      { x: 1620901004000, y: 20 },
      { x: 1620901006000, y: 120 },
      { x: 1620901008000, y: 70 },
    ],
    borderColor: 'grey',
  },
]);
const labels = ref(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']);
const legendTop = ref(true);

const options = computed<ChartOptions<'doughnut'>>(() => ({
  scales: {
    myScale: {
      type: 'logarithmic',
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
  datasets: data.value,
}));

const { barChartProps, barChartRef } = useBarChart({
  chartData: testData,
  options: options,
});

let index = ref(20);

function shuffleData() {
  // data.value = shuffle(data.value);
  data.value.push({
    label: 'FooBar',
    data: [
      { x: 1620901004000, y: 130 },
      { x: 1620901006000, y: 1020 },
      { x: 1620901008000, y: 70 },
    ],
    borderColor: 'blue',
  });
  index.value++;
}

function switchLegend() {
  legendTop.value = !legendTop.value;
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
