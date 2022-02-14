# Getting started

## Introduction

vue-chart-3 is rewrite of `vue-chartjs` for [Chart.js 3](https://www.chartjs.org/) for Vue 2 & 3, but written in Typescript and Vue Composition API.

# Installation

## For Vue 3

```bash
npm i vue-chart-3
#or
yarn add vue-chart-3
#or
pnpm i vue-chart-3
```

## For Vue 2

```bash
npm i vue-chart-3@legacy
#or
yarn add vue-chart-3@legacy
#or
pnpm i vue-chart-3@legacy
```

## Important notes

### Using with Vue 3 or Vue 2

This package works with version 2.x and 3.x of Vue.

For Vue 2 users, you will have to keep `2.x` version of `vue-chart-3`

- Vue 3 works out-of-the-box
- Vue 2 requires `@vue/composition-api` package to also be installed and registered, to provide Vue 3's [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) features like `ref, defineComponent, computed, reactive`.

⚠️ Since `2.0.3` (for Vue 2 users), Vue composition api will not register itself. Update your project if you didn't do it manually!

### Chart.js (v3)

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
