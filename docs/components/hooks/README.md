# Hooks

## Guide

::: warning
Hooks are still in alpha
:::

`vue-chart-3` also provides fully typed hooks compatible with Vue 2 and Vue 3 using `vue-demi`.

They are not mandatory, but they simplify the usage of chart components.

Each component has its corresponding hooks. Ex: `Barchart` will have `useBarChart`.

## Usage

Using the `useXXXChart` will clean up your code as it provides a shortcut for props and ref

Declaring it give you access to `xxxChartProps` and `xxxChartRef`.

For `BarChart` you can import `useBarChart` from `vue-chart-3` and use it like this

```ts
export default defineComponent({
  ...,
  setup() {
    const { barChartProps, barChartRef, update } = useBarChart({
      chartData: {}, //...
      plugins: []
    });

    return { barChartProps, barChartRef }
  }
})

```

Then you can use the `barChartProps` to fill the props of the component

```html
<BarChart v-bind="barChartProps" />
```

## Manual update

This hook also returns a helper function to manually update the ChartInstance

```ts
const { barChartProps, barChartRef, update } = useBarChart({...})
```

## Custom hook

If you have created a custom Chart component, you can also create your custom hook

```ts
import {defineChartComponent, defineChartHook} from 'vue-chart-3';

const MatrixChart = defineChartComponent('matrix-chart', 'matrix');
const useMatrixChart = defineChartHook('matrix');

export default defineComponent({
  ...,
  components: {
    MatrixChart
  },
  setup() {
    const { matrixChartProps, matrixChartRef } = useMatrixChart({
      chartData: {}, //...
      plugins: []
    });

    return { matrixChartProps, matrixChartRef }
  }
})

```
