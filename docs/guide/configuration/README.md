# Pre-requisites

## Vue 2

You need to have `@vue/composition-api` installed and registered.

## Vite.js + Vue 3

Nothing required, it works out of the box!

## Nuxt 2 / Nuxt bridge

- Create a plugin in `<srcDir>/plugins/chartjs.js`

```js
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
```

- Then register it in your `nuxt.config.[js|ts]`

```js
export default {
  plugins: [{ src: '~/plugins/chartjs.js', ssr: false }],
  build: {
    // Transpile ESM modules because Nuxt 2 uses CommonJS for building server and `vue-chart-3` uses `lodash-es` internaly
    transpile: ['lodash-es', 'vue-chart-3'],
  },
};
```

(Thanks to [@mirkopoloni](https://github.com/mirkopoloni) for additional Nuxt tips)

## Nuxt 3

Create a plugin in `<srcDir>/plugins/chartjs.client.ts`

```ts
import { Chart, registerables } from 'chart.js';

export default defineNuxtPlugin(() => {
  Chart.register(...registerables);
});
```

Nuxt 3 will register the plugins itself thanks to the `**.client.ts`, it knows that it needs to be call only client-side
