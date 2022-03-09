<template>
  <button type="button" @click="add">Add</button>
  <div>{{ data }}</div>
  <BarChart :chart-data="chartData" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { BarChart } from 'vue-chart-3-test';
import { Chart, ChartData, registerables } from 'chart.js';
Chart.register(...registerables);

const data = ref([20, 30]);

const chartData = computed<ChartData<'bar'>>(() => ({
  labels: ['Bla', 'bla', 'bla'],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['red', 'blue'],
    },
  ],
}));

function add() {
  data.value.pop();
}
</script>
