<template>
  <div id="app" style="width: 400px">
    <DoughnutChart :width="400" ref="doughnutRef" :chart-data="data" :options="options" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { Chart, registerables } from 'chart.js';
import { DoughnutChart } from '../dist';

Chart.register(...registerables);

export default defineComponent({
  name: 'Options',
  components: {
    DoughnutChart,
  },
  data() {
    return {
      data: {
        labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [
          {
            data: [30, 40, 60, 70, 5],
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
          },
        ],
      },
    };
  },
  computed: {
    options: {
      scales: {},
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  },
});
</script>
