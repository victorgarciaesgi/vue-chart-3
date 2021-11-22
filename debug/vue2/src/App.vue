<template>
  <div id="app" style="width: 400px">
    <button @click="shuffleData">Shuffle</button>
    <BarChart v-bind="barChartProps" />
    <img v-if="imgData" :src="imgData" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from '@vue/composition-api';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const legendTop = ref(true);
    const imgData = ref(null);

    const options = computed(() => ({
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }));

    const chartData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
      options,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value;
      imgData.value = barChartRef.value.chartInstance.toBase64Image();
    }

    return { shuffleData, barChartProps, barChartRef, imgData };
  },
});
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
