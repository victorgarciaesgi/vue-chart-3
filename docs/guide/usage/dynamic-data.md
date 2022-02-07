# Reactive data and options

Each component will trigger an update on the chart when the data passed thought `chart-data` and `options` changes.

```vue
<template>
  <div>
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" />
    <button @click="shuffleData">Shuffle</button>
  </div>
</template>

<script>
import { shuffle } from 'lodash-es';
import { computed, defineComponent, ref } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const doughnutRef = ref();

    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
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
    }

    return { testData, shuffleData, doughnutRef, options };
  },
});
</script>
```
