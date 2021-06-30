# 📊 Chart.js for Vue 2 and Vue 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![npm downloads][npm-total-downloads-src]][npm-downloads-href]
<img src='https://img.shields.io/npm/l/vue-chart-3.svg'>

[npm-version-src]: https://img.shields.io/npm/v/vue-chart-3.svg
[npm-version-href]: https://www.npmjs.com/package/vue-chart-3
[npm-downloads-src]: https://img.shields.io/npm/dm/vue-chart-3.svg
[npm-total-downloads-src]: https://img.shields.io/npm/dt/vue-chart-3.svg
[npm-downloads-href]: https://www.npmjs.com/package/vue-chart-3

This package is a rewrite of [vue-chartjs](https://github.com/apertureless/vue-chartjs) for Chart.js 3, but written in Typescript with [vue-demi](https://github.com/vueuse/vue-demi) and Vue Composition API.

# Installation

```bash
npm i vue-chart-3
#or
yarn add vue-chart-3
```

# Important notes

## Using with Vue 3 or Vue 2

This package works with version 2.x and 3.x of Vue.

- Vue 3 works out-of-the-box
- Vue 2 requires `@vue/composition-api` package to also be installed, to provide Vue 3's [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) features like `ref, defineComponent, computed, reactive`.

```js
// Vue 3
import { defineComponent, computed, ref } from 'vue';
// Vue 2
import { defineComponent, computed, ref } from '@vue/composition-api';
```

## Chart.js (v3)

Chart.js v3 is now tree-shakable, so make sure to import and register the chart components you need. See [Chart.js API](https://www.chartjs.org/docs/master/api/) for all available imports.

[Learn more about Chart.js tree-shaking](https://www.chartjs.org/docs/master/getting-started/integration.html#bundlers-webpack-rollup-etc)

For example, if you want to create a Doughnut chart and tree-shake the unused other components, it might look like this:

```ts
import { Chart, DoughnutController, ArcElement, Tooltip } from 'chart.js';
Chart.register(DoughnutController, ArcElement, Tooltip);
```

Or if you want all components of Chart.js (but lose the benefits of tree-shaking), use this:

```ts
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
```

Unlike `vue-chartjs`, there is no need to re-create each component with mixins and reactive props, etc. with this package. Thanks to `@vue/composition-api`, all of this is possible just by importing the corresponding component.

(Thanks to [@nwittwer](https://github.com/nwittwer) for upgraded notes)

# Demo

[CodeSandbox demo](https://codesandbox.io/s/demo-vue-chart-3-ugynm?file=/src/App.vue)

# Usage and docs

## Events emitted by all components

| Event           | Payload       |
| --------------- | ------------- |
| 'chart:render'  | chartInstance |
| 'chart:update'  | chartInstance |
| 'chart:destroy' | chartInstance |
| 'labels:update' | -             |

---

## Exemple with static data

```vue
<template>
  <Doughnut :data="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Doughnut } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { Doughnut },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { testData };
  },
});
</script>
```

---

Accessing Canvas Ref and ChartInstance

```vue
<template>
  <Doughnut
    ref="doughtnutRef"
    :data="testData"
    @chart:render="handleChartRender"
    @chart:update="handleChartRender"
  />
</template>

<script lang="ts">
import { shuffle } from 'lodash';
import { computed, defineComponent, ref, onMounted } from 'vue';
import { Doughnut } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { Doughnut },
  setup() {
    const doughtnutRef = ref<typeof Doughnut>();
    // ....
    onMounted(() => {
      // chartInstance not accessible until another version due to Vue 3 bugs with Chart.js
      console.log(doughtnutRef.value.canvasRef);
    });

    function handleChartRender(chart: Chart<'doughnut'>) {
      console.log(chart);
    }

    return { shuffleData, testData, doughtnutRef, handleChartRender };
  },
});
</script>
```

---

## Exemple with reactive data, options, events and tree shaking

```vue
<template>
  <div>
    <DoughnutChart ref="doughnutRef" :data="testData" :options="options" />
    <button @click="shuffleData">Shuffle</button>
  </div>
</template>

<script lang="ts">
import { shuffle } from 'lodash';
import { computed, defineComponent, ref } from 'vue';
import { Doughnut } from 'vue-chart-3';
import { Chart, DoughnutController, ArcElement, Tooltip, ChartData, ChartOptions } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip);

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart: Doughnut },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const doughnutRef = ref<typeof Doughnut>();

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

# Supporting plugins

You can use `defineChartComponent` to create ChartJs plugins components

Exemple:

```ts
import { defineChartComponent } from 'vue-chart-3';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';

Chart.register(MatrixController, MatrixElement);

const Matrix = defineChartComponent('MatrixChart', 'matrix');
// You can now use this component anywhere
```

If you are using Typescript, you have to augment the interface `ChartTypeRegistry` from `chart.js` manually.

The plugins for Chart.js are usually typed, but if they aren't you can do it manually

(Exemple taken from [chartjs-chart-matrix](https://github.com/kurkle/chartjs-chart-matrix/blob/next/types/index.esm.d.ts))

```ts
declare module 'chart.js' {
  export interface ChartTypeRegistry {
    matrix: {
      chartOptions: CoreChartOptions<'matrix'>;
      datasetOptions: MatrixControllerDatasetOptions<'matrix'>;
      defaultDataPoint: MatrixDataPoint;
      parsedDataType: MatrixDataPoint;
      scales: never;
    };
  }
}
```
