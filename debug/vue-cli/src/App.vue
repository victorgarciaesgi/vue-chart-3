<script lang="tsx">
import { Chart, ChartData, registerables } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
// import { BarChart, useBarChart } from '../../../dist/index.cjs';

import { ref, computed, defineComponent } from 'vue';
import { shuffle } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'App',
  props: {
    test: { type: String },
  },
  components: {
    BarChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const legendTop = ref(true);
    const toggleHidden = ref(false);

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
          hidden: toggleHidden.value,
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
      // legendTop.value = !legendTop.value;
      toggleHidden.value = !toggleHidden.value;
      console.log(barChartRef);
      // console.log(barChartRef.value.chartInstance.getDatasetMeta(0));
    }

    // return {
    //   barChartProps,
    //   barChartRef,
    //   shuffleData,
    // };

    return () => (
      <div id="app" style={{ width: '400px' }}>
        <button onClick={shuffleData}>Shuffle</button>
        <BarChart {...barChartProps.value} ref={barChartRef} class="test" />
      </div>
    );
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
