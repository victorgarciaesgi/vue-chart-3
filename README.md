# Chart.js for Vue 2 and Vue 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![npm downloads][npm-total-downloads-src]][npm-downloads-href]
<img src='https://img.shields.io/npm/l/vue-chart-3.svg'>

[npm-version-src]: https://img.shields.io/npm/v/vue-chart-3.svg
[npm-version-href]: https://www.npmjs.com/package/vue-chart-3
[npm-downloads-src]: https://img.shields.io/npm/dm/vue-chart-3.svg
[npm-total-downloads-src]: https://img.shields.io/npm/dt/vue-chart-3.svg
[npm-downloads-href]: https://www.npmjs.com/package/vue-chart-3

This package is a rewrite of [vue-chartjs](https://github.com/apertureless/vue-chartjs) for Chart.js 3, but written with [vue-demi](https://github.com/vueuse/vue-demi) and Vue Composition API and Typescript in mind.

# Compatibility

- Chart.js >= 3
- Compatible with Vue 2 with `@vue/composition-api` installed and registered
- Compatible with Vue 3

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

Chart.js 3 is now tree-shakable, so on your app, don't forgot to register the components you want

```ts
import { Chart, LineController, LineElement } from 'chart.js';

Chart.register(LineController, LineElement);
```

Or if you want all components

```ts
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
```

At the difference of vue-chartjs, now there is no need to re-create each component with mixins and reactive props etc..
Thanks to Vue Composition Api, all of this is possible just by importing the corresponding component

---

Exemple with static data

```vue
<template>
  <Doughnut :data="testData" />
</template>
```

```ts
import { defineComponent } from '@vue/composition-api';
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
```

---

Exemple with reactive data

```vue
<template>
  <div>
    <Doughnut :data="testData" />
    <button @click="suffleData">Shuffle</button>
  </div>
</template>
```

```ts
import { shuffle } from 'lodash';
import { computed, defineComponent, ref } from '@vue/composition-api';
import { Doughnut } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { Doughnut },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);

    const testData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    function shuffleData() {
      dataValues.value = shuffle(dataValues.value);
    }

    return { shuffleData, testData };
  },
});
```
