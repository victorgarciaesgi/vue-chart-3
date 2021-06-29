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

# Compatibility

- Chart.js >= 3
- Compatible with Vue 2 with `@vue/composition-api` installed and registered
- Compatible with Vue 3

---

It's recommended to use this with [Volar](https://github.com/johnsoncodehk/volar) on VSCode for better props types check

# Demo

[CodeSandbox demo](https://codesandbox.io/s/demo-vue-chart-3-ugynm?file=/src/App.vue)

# Installation

```bash
npm i vue-chart-3
#or
yarn add vue-chart-3
```

# Usage

Example with static data

```vue
<template>
  <DoughnutChart :data="testData" />
</template>
```

```ts
import { defineComponent } from "vue";
import { Chart, DoughnutController, ArcElement, Tooltip } from 'chart.js'
import { Doughnut as DoughnutChart } from 'vue-chart-3'

Chart.register(DoughnutController, ArcElement, Tooltip)

export default defineComponent({
  name: "Home",
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    };

    return { testData };
  },
});
```

---

Example with reactive data

```vue
<template>
  <div>
    <DoughnutChart :data="testData" />
    <button @click="suffleData">Shuffle</button>
  </div>
</template>
```

```ts
<script lang="ts">
import { shuffle } from 'lodash';
import { defineComponent, computed, ref } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip } from 'chart.js'
import { Doughnut as DoughnutChart } from 'vue-chart-3'

Chart.register(DoughnutController, ArcElement, Tooltip)

export default defineComponent({
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5])

    const testData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
          ],
        },
      ],
    }))

    function shuffleData() {
      dataValues.value = shuffle(dataValues.value)
    }

    return { shuffleData, testData }
  },
})
```

# Supporting plugins

You can use `defineChartComponent` to create ChartJs plugins components

Example:

```ts
import { defineChartComponent } from "vue-chart-3";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";

Chart.register(MatrixController, MatrixElement);

const Matrix = defineChartComponent("MatrixChart", "matrix");
// You can now use this component anywhere
```

If you are using Typescript, you have to augment the interface `ChartTypeRegistry` from `chart.js` manually.

The plugins for Chart.js are usually typed, but if they aren't you can do it manually

(Example taken from [chartjs-chart-matrix](https://github.com/kurkle/chartjs-chart-matrix/blob/next/types/index.esm.d.ts))

```ts
declare module "chart.js" {
  export interface ChartTypeRegistry {
    matrix: {
      chartOptions: CoreChartOptions<"matrix">;
      datasetOptions: MatrixControllerDatasetOptions<"matrix">;
      defaultDataPoint: MatrixDataPoint;
      parsedDataType: MatrixDataPoint;
      scales: never;
    };
  }
}
```

# Important notes

## Using with Vue 3 or Vue 2

This package works with version 2.x and 3.x of Vue.

- Vue 3 works out-of-the-box
- Vue 2 requires `@vue/composition-api` package to also be installed, to provide Vue 3's [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) features like `ref, defineComponent, computed, reactive`. 

```js
// Vue 3
import { defineComponent, computed, ref } from 'vue' 

// Vue 2
import { defineComponent, computed, ref } from '@vue/composition-api' 
```

## Chart.js (v3)

Chart.js v3 is now tree-shakable, so make sure to import and register the chart components you need. See [Chart.js API](https://www.chartjs.org/docs/master/api/) for all available imports.

[Learn more about Chart.js tree-shaking](https://www.chartjs.org/docs/master/getting-started/integration.html#bundlers-webpack-rollup-etc)

For example, if you want to create a Doughnut chart and tree-shake the unused other components, it might look like this:

```ts
import { Chart, DoughnutController, ArcElement, Tooltip } from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip);
```

Or if you want all components of Chart.js (but lose the benefits of tree-shaking), use this:

```ts
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
```

Unlike `vue-chartjs`, there is no need to re-create each component with mixins and reactive props, etc. with this package. Thanks to `@vue/composition-api`, all of this is possible just by importing the corresponding component.
