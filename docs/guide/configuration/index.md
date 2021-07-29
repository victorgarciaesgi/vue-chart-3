# Pre-requisites

## Vue 2

You need to have `@vue/composition-api` installed. It will registered itself so no need to call `Vue.use(VueCompositionApi)`

## Vue 3

Nothing required, it works out of the box!

## Nuxt 2 (SSR)

- Create a plugin in `<srcDir>/plugins/chartjs.js`

```js
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
```

- Then register it in your `nuxt.config.[js|ts]`

```js
export default {
  plugins: [{ src: '~/plugins/chartjs.js', ssr: false }],
};
```

Just it case, wrap your component inside `<client-only>`.

## Nuxt 3

Waiting for release 🙄
