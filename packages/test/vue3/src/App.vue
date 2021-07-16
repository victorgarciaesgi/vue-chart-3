<template>
  <div id="app" style="width: 400px">
    <button @click="shuffleData">Shuffle</button>
    <DoughnutChart :width="400" ref="doughnutRef" :chartData="testData" :options="options" />
  </div>
</template>

<script lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { DoughnutChart, ExtractComponentData } from '../../../vue-chart-3/src/index';
import { ref, computed, defineComponent } from 'vue';
import { shuffle } from 'lodash';
import Test from './components/test.vue';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  props: {
    test: { type: String },
  },
  components: {
    DoughnutChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const doughnutRef = ref<ExtractComponentData<typeof DoughnutChart>>();
    const legendTop = ref(true);

    const options = computed<ChartOptions>(() => ({
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

    const testData = computed<ChartData<'doughnut'>>(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    function handleChartRender() {
      doughnutRef.value.canvasRef;
    }

    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value;
    }

    return { data, testData, shuffleData, doughnutRef, options, handleChartRender };
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
