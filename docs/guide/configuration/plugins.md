# Supporting plugins

You can use `defineChartComponent` to create ChartJs plugins components

Example:

```ts
import { Chart, registerables } from 'chart.js';
import { defineChartComponent } from 'vue-chart-3';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';

Chart.register(MatrixController, MatrixElement, ...registerables);

const Matrix = defineChartComponent('MatrixChart', 'matrix');
// You can now use this component anywhere
```

If you are using Typescript, you have to augment the interface `ChartTypeRegistry` from `chart.js` manually.

The plugins for Chart.js are usually typed, but if they aren't you can do it manually

(Example taken from [chartjs-chart-matrix](https://github.com/kurkle/chartjs-chart-matrix/blob/next/types/index.esm.d.ts))

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
