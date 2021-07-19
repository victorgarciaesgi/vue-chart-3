<template>
  <div id="app">
    <div style="width: 400px">
      <button @click="shuffleData">Shuffle</button>
      <BarChart :width="400" ref="doughnutRef" :chart-data="testData" :options="options" />
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart } from './dist';
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
    const doughnutRef = ref();
    const legendTop = ref(true);

    const options = ref({
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
    });

    const testData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value;
    }

    return { data, testData, shuffleData, doughnutRef, options };
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
