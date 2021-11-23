# Pre-requisites

## Vue 2

You need to have `@vue/composition-api` installed. It will registered itself so no need to call `Vue.use(VueCompositionApi)`

## Vue 3

Nothing required, it works out of the box!

## Nuxt 2 and SSR

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

## Nuxt 3

Nuxt 3 beta just came out, still processing what's the best way to do it, but since the plugin system looks the same as Nuxt 2, you can follow Nuxt 2 instruction for now.
Any bug report with Nuxt 3 or Vite.js is welcome
