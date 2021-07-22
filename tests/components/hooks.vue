<template>
  <div id="app" style="width: 400px">
    <button @click="shuffleData">Shuffle</button>
    <BarChart v-bind="barChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart } from '../../packages/vue-chart-3/src';
import { ref, computed, defineComponent } from '@vue/composition-api';
import { shuffle } from 'lodash';

export default defineComponent({
  name: 'TestHooks',
  components: {
    BarChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const legendTop = ref(true);

    const options = computed(() => ({
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }));

    const testData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const { barChartProps, chartInstance } = useBarChart({
      chartData: testData,
      options: options,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
      legendTop.value = !legendTop.value;
      console.log(chartInstance.value);
    }

    return { data, shuffleData, barChartProps, chartInstance };
  },
});
</script>
