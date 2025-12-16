# Getting started

## Introduction

vue-chart-3 is rewrite of `vue-chartjs` for [Chart.js 4](https://www.chartjs.org/) for Vue 3, but written in Typescript and Vue Composition API.

# Installation

## For Vue 3

```bash
npm i vue-chart-3 chart.js
#or
yarn add vue-chart-3 chart.js
#or
pnpm i vue-chart-3 chart.js
```

### Chart.js (v4)

Chart.js v4 is tree-shakable, so make sure to import and register the chart components you need. See [Chart.js API](https://www.chartjs.org/docs/latest/api/) for all available imports.

[Learn more about Chart.js tree-shaking](https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc)

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
