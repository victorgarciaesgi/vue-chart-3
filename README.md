# Vue - Chart.js 3

This package is basicaly a port of [vue-chartjs](https://github.com/apertureless/vue-chartjs) for Chart.js 3, but written with [vue-demi](https://github.com/vueuse/vue-demi) with Vue Composition API and Typescript in mind.

> Compatible with Vue 2 with `@vue/composition-api` installed and registered

> Compatible with Vue 3 without anything to add

It's recommended to use this with [Volar](https://github.com/johnsoncodehk/volar) on VSCode for better props types check

# Installation

```bash
npm i vue-chartjs-3
#or
yarn add vue-chartjs-3
```

# Usage

Chart.js 3 is now tree-shakable, so on your app, don't forgot to register the components you want

```ts
import { Chart, LineController, LineElement } from `chart.js`;

Chart.register(LineController, LineElement);
```

Or if you want all components

```ts
import { Chart, registerables } from `chart.js`;

Chart.register(...registerables);
```

At the difference of vue-chartjs, now there is no need to re-create each component with mixins and reactive props etc..
Thanks to Vue Composition Api, all of this is possible just by importing the corresponding component

---

Exemple with static data

```vue
<template>
  <div>
    <Doughnut :data="testData" />
    <button @click='suffleData'><button>
  </div>
</template>
```

```ts
import { defineComponent } from '@vue/composition-api';
import { Doughnut } from 'vue-chartjs-3';

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
    <button @click='suffleData'>Shuffle<button>
  </div>
</template>
```

```ts
import { shuffle } from 'lodash';
import { computed, defineComponent, ref } from '@vue/composition-api';
import { Doughnut } from 'vue-chartjs-3';

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
