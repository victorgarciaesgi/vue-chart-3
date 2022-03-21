<template>
  <div style="width: 400px">
    <div style="display: flex; justify-content: center">
      <button type="button" @click="shuffleData">Shuffle</button>
      <button type="button" @click="switchLegend">Swicth legends</button>
    </div>
    {{ dataValues }}
    <!-- <DoughnutChart v-bind="doughnutChartProps" /> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
// import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);
export default defineComponent({
  name: 'App',
  // components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const dataLabels = ref(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']);
    const toggleLegend = ref(true);

    const testData = computed<ChartData<'doughnut'>>(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const options = computed<ChartOptions<'doughnut'>>(() => ({
      scales: {
        myScale: {
          type: 'logarithmic',
          position: toggleLegend.value ? 'left' : 'right',
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? 'top' : 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    }));

    // const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
    //   chartData: testData,
    //   options,
    // });

    let index = ref(20);

    function shuffleData() {
      // dataValues.value = shuffle(dataValues.value);
      dataValues.value.push(++index.value);
      dataLabels.value.push('Autre' + index.value);
      console.log(dataValues.value);
      // console.log(doughnutChartRef.value.chartInstance);
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      dataValues,
      // doughnutChartRef,
      // doughnutChartProps,
    };
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
