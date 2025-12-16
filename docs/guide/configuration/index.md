# Pre-requisites

## Vite.js + Vue 3

Nothing required, it works out of the box!

## Nuxt 3

Create a plugin in `<srcDir>/plugins/chartjs.client.ts`

```ts
import { defineNuxtPlugin } from '#app';

// Workaround because chart.js doesn't provide an default export
import * as ChartJs from 'chart.js';
const { Chart, registerables } = ChartJs;

export default defineNuxtPlugin(() => {
  Chart.register(...registerables);
});
```

Nuxt 3 will register the plugins itself thanks to the `**.client.ts`, it knows that it needs to be call only client-side
