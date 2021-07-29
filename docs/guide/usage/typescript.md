# Typescript

Each component props is properly typed and should be throwing errors if you are using [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Code exemple

```vue
<template>
  <div>
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" />
    <button @click="shuffleData">Shuffle</button>
  </div>
</template>

<script lang="ts">
import { shuffle } from 'lodash';
import { computed, defineComponent, ref } from 'vue';
import { DoughnutChart, ExtractComponentData } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const doughnutRef = ref<ExtractComponentData<typeof DoughnutChart>>();

    const options = ref<ChartOptions<'doughnut'>>({
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

    const testData = computed<ChartData<'doughnut'>>(() => ({
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

## Helper types

### `ExtractComponentData<T>`

This component is useful if you want to access the Chart component ref.

Ex:

```ts
setup() {
  const doughtnutRef = ref<ExtractComponentData<typeof DoughtnutChart>>()

  foo() {
    doughtnutRef.value?.chartInstance.toBase64Image();
  }
}
```

### `ExtractComponentProps<T>`

This type will extracts prop types from the component if you want to type your `v-bind`.

Ex:

```ts
setup() {
  const barChartProps = computed<ExtractComponentProps<typeof BarChart>>(() => ({
    chartData: {...},
    options: {}
  }))
}
```
